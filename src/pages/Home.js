import React from 'react'
import Post from '../components/Post'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../css/index.css'
import NewPost from '../components/NewPost'

export default function Home () {
  return (
    <>
      <Navbar />
      <section className='section'>
        <div className='columns body-columns'>
          <div className='column is-half is-offset-one-quarter'>
            <NewPost />
            {[1, 2, 3, 4, 5].map(i => (
              <Post key={i}/>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
