import React, { useContext } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import { AuthContext } from '../context/auth'
import GuardedRoute from './GuardedRoute'

export default function App () {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <Router>
      <Switch>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <GuardedRoute
          path='/profile/:id'
          component={Profile}
          auth={isAuthenticated}
        />
        <GuardedRoute path='/' component={Home} auth={isAuthenticated} />
      </Switch>
    </Router>
  )
}
