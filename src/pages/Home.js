import React from 'react'
import CardDetail from '../components/CardDetail'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../css/index.css'

export default function Home () {
  return (
    <>
      <Navbar />
      <section className='section'>
        <div className='columns body-columns'>
          <div className='column is-half is-offset-one-quarter'>
            <CardDetail />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
