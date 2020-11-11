import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { register } from '../api/users'
import Input from '../components/Input'
import '../css/register.css'

export default function Register () {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirm, setConfirm] = useState('')

  function onChangeUsername (e) {
    setUsername(e.target.value)
  }

  function onChangeEmail (e) {
    setEmail(e.target.value)
  }

  function onChangePassword (e) {
    setPassword(e.target.value)
  }

  function onChangeConfirm (e) {
    setConfirm(e.target.value)
  }

  async function onSubmit (e) {
    e.preventDefault()
    try {
      const user = {
        username,
        email,
        password,
        password_confirm
      }
      console.log(user)
      const res = await register(user)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className='section container'>
      <div className='columns is-multiline'>
        <div className='column is-8 is-offset-2 register '>
          <div className='columns'>
            <div className='column left is-hidden-mobile'>
              <img src='https://logoipsum.com/logo/logo-12.svg' />
              <h2 className='subtitle colored is-4'>
                Lorem ipsum dolor sit amet.
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis ex deleniti aliquam tempora libero excepturi vero
                soluta odio optio sed.
              </p>
            </div>
            <div className='column right has-text-centered'>
              <h1 className='title is-4'>Sign up today</h1>
              <p className='description'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </p>
              <form onSubmit={onSubmit}>
                <Input
                  autocomplete='username'
                  placeholder='Username'
                  onChange={onChangeUsername}
                />
                <Input
                  autocomplete='email'
                  type='email'
                  placeholder='Email'
                  onChange={onChangeEmail}
                />
                <Input
                  autocomplete='password'
                  type='password'
                  placeholder='Password'
                  onChange={onChangePassword}
                />
                <Input
                  autocomplete='password_confirm'
                  type='password'
                  placeholder='Confirm'
                  onChange={onChangeConfirm}
                />
                <button className='button is-rounded is-block is-primary is-fullwidth'>
                  Submit
                </button>
                <br />
                <small>
                  Already have an account? <Link to='/login'>Login</Link>
                </small>
              </form>
            </div>
          </div>
        </div>
        <div className='column is-8 is-offset-2'>
          <br />
          <nav className='level'>
            <div className='level-left'>
              <div className='level-item'>
                <span className='icon'>
                  <i className='fab fa-twitter'></i>
                </span>{' '}
                &emsp;
                <span className='icon'>
                  <i className='fab fa-facebook'></i>
                </span>{' '}
                &emsp;
                <span className='icon'>
                  <i className='fab fa-instagram'></i>
                </span>{' '}
                &emsp;
                <span className='icon'>
                  <i className='fab fa-github'></i>
                </span>{' '}
                &emsp;
                <span className='icon'>
                  <i className='fas fa-envelope'></i>
                </span>
              </div>
            </div>
            <div className='level-right'>
              <small className='level-item'>
                &copy; logoipsum. All Rights Reserved.
              </small>
            </div>
          </nav>
        </div>
      </div>
    </section>
  )
}
