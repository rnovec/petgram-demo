import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AuthContext } from '../context/auth'
import '../css/index.css'

export default function Main ({ children }) {
  const { getUser } = useContext(AuthContext)
  useEffect(() => {
    getUser()
  }, [])
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
