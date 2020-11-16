import React, { createContext, useState } from 'react'
import { getPosts, removePost } from '../api/posts'

export const PostContext = createContext()

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([])
  const [currentPost, setCurrentPost] = useState({})

  const getPostList = async (params = {}) => {
    const data = await getPosts(params)
    setPosts([...posts, ...data.results])
  }

  const deletePost = async id => {
    await removePost(id)
    setPosts(posts.filter(post => post.uuid !== id))
  }

  const addPost = (post) => {
    setPosts([post, ...posts])
  }

  const contextValue = {
    posts,
    currentPost,
    setCurrentPost,
    setPosts,
    getPostList,
    addPost,
    deletePost
  }

  // Global data with Context Provider
  return (
    <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
  )
}
