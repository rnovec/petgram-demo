import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AuthContext } from '../context/auth'
import '../css/index.css'

export default function Principal ({ children }) {
  const { getProfile, getUser } = useContext(AuthContext)

  useEffect(() => {
    ;(async () => {
      await getUser()
      await getProfile()
    })()
  }, [])
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
