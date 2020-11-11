import React from 'react'
import ReactDOM from 'react-dom'
import App from './router'
import { AuthContextProvider } from './context/auth'
import { PostContextProvider } from './context/posts'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostContextProvider>
        <App />
      </PostContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
