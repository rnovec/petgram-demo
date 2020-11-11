import React, { createContext, useState } from 'react'
import { getPosts } from '../api/posts'

export const PostContext = createContext()

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([])

  const getPostList = async () => {
    const data = await getPosts()
      setPosts(data.results)
      Promise.resolve(data)
  }

  const contextValue = {
    posts,
    getPostList
  }

  // Global data with Context Provider
  return (
    <PostContext.Provider value={contextValue}>
      {children}
    </PostContext.Provider>
  )
}
