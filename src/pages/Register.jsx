import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { register } from '../api/users'
import Input from '../components/Input'
import { AuthContext } from '../context/auth'
import '../css/register.css'

export default function Register () {
  const history = useHistory()
  const { authenticate } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState([])
  const [user, setUser] = useState({
    username: 'rnovec',
    fullname: 'Raul Novelo',
    email: 'example@example.com',
    password: '(08642)!2a',
    password_confirm: '(08642)!2a'
  })

  function onChange (e) {
    const val = e.target.value
    const attr = e.target.name
    setUser({ ...user, [attr]: val })
  }

  const onSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)
    setErrors([])
    try {
      const { username, password } = user
      await register(user)
      await authenticate({ username, password })
      history.push('/')
    } catch (error) {
      setErrors(Object.entries(error))
    } finally {
      setIsLoading(false)
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
                  name='username'
                  value={user.username}
                  onChange={onChange}
                  required
                />
                <Input
                  autocomplete='name'
                  placeholder='Full name'
                  name='fullname'
                  value={user.fullname}
                  onChange={onChange}
                  required
                />
                <Input
                  autocomplete='email'
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={user.email}
                  onChange={onChange}
                  required
                />
                <Input
                  autocomplete='password'
                  type='password'
                  placeholder='Password'
                  name='password'
                  isPassword
                  value={user.password}
                  onChange={onChange}
                  required
                />
                <Input
                  autocomplete='password_confirm'
                  type='password'
                  placeholder='Confirm'
                  name='password_confirm'
                  isPassword
                  value={user.password_confirm}
                  onChange={onChange}
                  required
                />
                {errors.length ? (
                  <div className='field'>
                    <p className='help is-danger'>{errors[0][1] || ''}</p>
                  </div>
                ) : (
                  <></>
                )}

                <button
                  className={`button is-medium is-rounded is-block is-primary is-fullwidth ${
                    isLoading ? 'is-loading' : ''
                  }`}
                >
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
                <a className='icon'>
                  <i className='fab fa-facebook'></i>
                </a>{' '}
                &emsp;
                <a className='icon'>
                  <i className='fab fa-instagram'></i>
                </a>{' '}
                &emsp;
                <a
                  className='icon'
                  target='_blank'
                  href='https://github.com/rnovec/petgram-demo'
                >
                  <i className='fab fa-github'></i>
                </a>{' '}
                &emsp;
                <a className='icon' href='mailto:raul.novelo@aaaimx.org'>
                  <i className='fas fa-envelope'></i>
                </a>
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
