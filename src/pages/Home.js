import React, { useContext, useEffect } from 'react'
import Main from '../layouts/Main'
import Post from '../components/Post'
import NewPost from '../components/NewPost'
import { PostContext } from '../context/posts'
import '../css/index.css'

export default function Home () {
  const { posts, getPostList } = useContext(PostContext)

  useEffect(() => {
    ;(async () => {
      await getPostList()
    })()
  }, [])
  return (
    <Main>
      <section className='section'>
        <div className='columns body-columns'>
          <div className='column is-half is-offset-one-quarter'>
            <NewPost />
            {posts.map((post) => (
              <Post post={post} key={post.uuid} />
            ))}
          </div>
        </div>
      </section>
    </Main>
  )
}
