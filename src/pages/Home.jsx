import React, { useContext, useEffect, useState } from 'react'
import Main from '../layouts/Main'
import Post from '../components/Post'
import PostCreate from '../components/PostCreate'
import { PostContext } from '../context/posts'
import '../css/index.css'
import useInfiniteScroll from '../hooks/useInifiniteScroll'

export default function Home () {
  const { posts, currentPost, getPostList, setPost } = useContext(PostContext)
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems)
  const [listQuery, setListQuery] = useState({
    limit: 5,
    offset: 0
  })

  async function fetchMoreListItems () {
    setIsFetching(true)
    setListQuery(query => ({
      limit: query.limit,
      offset: query.offset + query.limit
    }))
    await getPostList(listQuery)
    setIsFetching(false)
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
            {isFetching && 'Fetching more list items...'}
          </div>
        </div>
      </section>
    </Main>
  )
}
