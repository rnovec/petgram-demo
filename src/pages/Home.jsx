import React, { useContext, useEffect } from 'react'
import Main from '../layouts/Main'
import Post from '../components/Post'
import PostCreate from '../components/PostCreate'
import { PostContext } from '../context/posts'
import '../css/index.css'

export default function Home () {
  const { posts, currentPost, getPostList } = useContext(PostContext)

  useEffect(() => {
    ;(async () => {
      await getPostList()
    })()
  }, [currentPost])
  return (
    <Main>
      <section className='section'>
        <div className='columns body-columns'>
          <div className='column is-half is-offset-one-quarter'>
            <PostCreate />
            {posts.map((post) => (
              <Post post={post} key={post.uuid} />
            ))}
          </div>
        </div>
      </section>
    </Main>
  )
}
