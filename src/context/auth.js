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
  const [profile, setProfile] = useState({})

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
    setProfile({})
  }

  const getProfile = async () => {
    const token = getToken()
    const user = decodeToken(token)
    const profile = await getUserInfo(user.id)
    setProfile(profile)
    Promise.resolve(profile)
  }

  const contextValue = {
    profile,
    isAuthenticated,
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
