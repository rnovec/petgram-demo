import React, { createContext, useState, useEffect } from 'react'
import { login } from '../api/users'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const authenticate = async data => {
    const res = await login(data)
    setIsAuthenticated(true)
    Promise.resolve(res)
  }

  const contextValue = {
    isAuthenticated,
    setIsAuthenticated,
    authenticate
  }

  // Global data with Context Provider
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
