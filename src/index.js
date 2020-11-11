import React from 'react'
import ReactDOM from 'react-dom'
import App from './router'
import { AuthContextProvider } from './context/auth'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
