import React, { createContext, useState } from 'react'
import { login, getUserInfo } from '../api/users'
import {
  decodeToken,
  getToken,
  removeRefreshToken,
  removeToken,
  setRefreshToken,
  setToken
} from '../util/auth'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState({})
  const defaultAvatar =
    'https://cooplaaurora.com/resources/members/default-user.jpg'

  const authenticate = async data => {
    const res = await login(data)
    setToken(res.access)
    setRefreshToken(res.refresh)
    setIsAuthenticated(true)
    Promise.resolve(res)
  }

  const logout = () => {
    removeToken()
    removeRefreshToken()
    setIsAuthenticated(false)
    setUser({})
  }

  const getUser = async () => {
    const token = getToken()
    const data = decodeToken(token)
    const user = await getUserInfo(data.id)
    setUser(user)
    Promise.resolve(user)
  }

  const contextValue = {
    user,
    isAuthenticated,
    defaultAvatar,
    getUser,
    setIsAuthenticated,
    authenticate,
    logout
  }

  // Global data with Context Provider
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
