import { Link } from 'react-router-dom'

import '../css/register.css'

export default function Register () {
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
              <form>
                <div className='field'>
                  <div className='control'>
                    <input
                      className='input is-rounded'
                      type='text'
                      placeholder='Username'
                    />
                  </div>
                </div>

                <div className='field'>
                  <div className='control'>
                    <input
                      className='input is-rounded'
                      type='email'
                      placeholder='Email'
                    />
                  </div>
                </div>
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
