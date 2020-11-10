import '../css/login2.css'

export default function Login () {
  return (
    <section className='hero is-light is-fullheight'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <div className='column is-4 is-offset-4'>
            <h3 className='title has-text-black'>Login</h3>
            <hr className='login-hr' />
            <p className='subtitle has-text-black'>Please login to proceed.</p>
            <div className='box'>
              <figure className='avatar'>
                <img src='https://placehold.it/128x128' />
              </figure>
              <form>
                <div className='field'>
                  <div className='control'>
                    <input
                      className='input'
                      type='email'
                      placeholder='Your Email'
                      autofocus=''
                    />
                  </div>
                </div>

                <div className='field'>
                  <div className='control'>
                    <input
                      className='input'
                      type='password'
                      placeholder='Your Password'
                    />
                  </div>
                </div>
                <div className='field'>
                  <label className='checkbox'>
                    <input type='checkbox' /> Remember me
                  </label>
                </div>
                <button className='button is-block is-info is-medium is-fullwidth'>
                  Login <i className='fa fa-sign-in' aria-hidden='true'></i>
                </button>
              </form>
            </div>
            <p className='has-text-grey'>
              <a href='../'>Sign Up</a> &nbsp;·&nbsp;
              <a href='../'>Forgot Password</a> &nbsp;·&nbsp;
              <a href='../'>Need Help?</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
