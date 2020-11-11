import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getToken } from '../util/auth'

const GuardedRoute = ({ component: Component, auth, ...rest }) => {
  const token = getToken()

  if (token) {
    console.log(window.location.href)
    return <Route {...rest} render={props => <Component {...props} />} />
  }

  return (
    <Route
      {...rest}
      render={props =>
        auth ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  )
}

export default GuardedRoute
