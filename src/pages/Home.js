import React, { useContext, useEffect } from 'react'
import Post from '../components/Post'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NewPost from '../components/NewPost'
import { AuthContext } from '../context/auth'
import { PostContext } from '../context/posts'
import '../css/index.css'

export default function Home () {
  const { getProfile } = useContext(AuthContext)
  const { posts, getPostList } = useContext(PostContext)

  useEffect(() => {
    ;(async () => {
      await getProfile()
      await getPostList()
    })()
  }, [])
  return (
    <>
      <Navbar />
      <section className='section'>
        <div className='columns body-columns'>
          <div className='column is-half is-offset-one-quarter'>
            <NewPost />
            {posts.map((post, i) => (
              <Post post={post} key={i} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
