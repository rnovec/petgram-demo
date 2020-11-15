import React, { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import Input from '../components/Input'
import { AuthContext } from '../context/auth'
import '../css/login.css'

export default function Login () {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const { authenticate } = useContext(AuthContext)

  function togglePassword () {
    setShowPassword(!showPassword)
  }

  function onChangeUsername (e) {
    setUsername(e.target.value)
  }

  function onChangePassword (e) {
    setPassword(e.target.value)
  }

  async function onSubmit (e) {
    e.preventDefault()
    setIsLoading(true)
    try {
      await authenticate({ username, password })
      history.push('/')
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className='hero is-fullheight'>
      <div className='hero-body has-text-centered'>
        <div className='login'>
          <img
            src='https://logoipsum.com/logo/logo-12.svg'
            alt='login-logo'
            width='325px'
          />
          <form onSubmit={onSubmit}>
            <div className='field'>
              <div className='control has-icons-left'>
                <input
                  className='input is-rounded'
                  type='text'
                  placeholder='Username'
                  autoComplete='username'
                  onChange={onChangeUsername}
                  required
                />
                <span className='icon is-small is-left'>
                  <i className='material-icons'>email</i>
                </span>
              </div>
            </div>
            <div className='field'>
              <div className='control has-icons-left has-icons-right'>
                <input
                  className='input is-rounded'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='**********'
                  onChange={onChangePassword}
                  autoComplete='current-password'
                  required
                />
                <span className='icon is-small is-left'>
                  <i className='material-icons'>lock</i>
                </span>

                <span
                  className='icon is-small is-right is-clickable'
                  onClick={togglePassword}
                >
                  <i className='material-icons'>
                    {showPassword ? 'visibility' : 'visibility_off'}
                  </i>
                </span>
              </div>
            </div>
            <div className='field'>
              <label className='checkbox'>
                <input type='checkbox' /> Remember me
              </label>
            </div>
            <button
              className={`button is-block is-fullwidth is-primary is-medium is-rounded ${
                isLoading ? 'is-loading' : ''
              }`}
              type='submit'
            >
              Login
            </button>
          </form>
          <br />
          <nav className='level'>
            {/* <div className='level-item has-text-centered'>
              <div>
                <a>Forgot Password?</a>
              </div>
            </div> */}
            <div className='level-item has-text-centered'>
              <div>
                <Link to='/register'>Create an Account</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  )
}
