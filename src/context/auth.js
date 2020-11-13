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
  const [profile, setProfile] = useState({})
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
    setProfile({})
  }

  const getUser = async () => {
    const token = getToken()
    const data = decodeToken(token)
    const user = await getUserInfo(data.id)
    setUser(user)
    Promise.resolve(user)
  }

  const getProfile = async () => {
    const token = getToken()
    const user = decodeToken(token)
    const profile = await getUserInfo(user.id)
    setProfile(profile)
    Promise.resolve(profile)
  }

  const contextValue = {
    user,
    profile,
    isAuthenticated,
    defaultAvatar,
    getUser,
    getProfile,
    setIsAuthenticated,
    authenticate,
    logout
  }

  // Global data with Context Provider
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
