import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Login2 from '../pages/Login2'
import Navbar from '../components/Navbar'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route path='/login2'>
          <Login2 />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
