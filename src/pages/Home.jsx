import React, { useContext, useEffect, useState } from 'react'
import Main from '../layouts/Main'
import Post from '../components/Post'
import PostCreate from '../components/PostCreate'
import { PostContext } from '../context/posts'
import '../css/index.css'
import useInfiniteScroll from '../hooks/useInifiniteScroll'

export default function Home () {
  const { posts, getPostList, total, setPosts } = useContext(PostContext)
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMorePosts)
  const [listQuery, setListQuery] = useState({
    limit: 5,
    offset: 0
  })

  useEffect(() => {
    setPosts([])
    fetchMorePosts()
  }, [])

  async function fetchMorePosts () {
    console.log(posts.length, total)
    if (posts.length <= total && listQuery.offset > total) {
      setIsFetching(false)
      return
    }
    setIsFetching(true)
    await getPostList(listQuery)
    setIsFetching(false)
    setListQuery({
      limit: listQuery.limit,
      offset: listQuery.offset + listQuery.limit
    })
  }

  return (
    <Main>
      <section className='section'>
        <div className='columns body-columns'>
          <div className='column is-half is-offset-one-quarter'>
            <PostCreate />
            {posts.map(post => (
              <Post post={post} key={post.uuid} />
            ))}
            {isFetching && (
              <div className='section has-text-centered'>
                Loading latest posts...
              </div>
            )}
          </div>
        </div>
      </section>
    </Main>
  )
}
