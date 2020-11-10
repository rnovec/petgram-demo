import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <div className='navbar is-inline-flex is-transparent'>
      <div className='navbar-brand'>
        <a className='navbar-item'>
          <img
            src='https://bulma.io/images/bulma-logo.png'
            width='112'
            height='28'
            alt='Bulma'
          />
        </a>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-item'>
          <div className='control has-icons-left'>
            <input
              className='input is-small has-text-centered'
              type='text'
              placeholder='search'
            />
            <span className='icon is-left is-small'>
              <i className='material-icons'>search</i>
            </span>
          </div>
        </div>
      </div>
      <div className='navbar-item is-flex-touch'>
        <Link to='/'>
          {' '}
          <a className='navbar-item'>
            <i className='material-icons'>explore</i>
          </a>
        </Link>

        <a className='navbar-item'>
          <i className='material-icons'>favorite_border</i>
        </a>
        <Link className='navbar-item' to='/login'>
          <i className='material-icons'>person_outline</i>
        </Link>
      </div>
    </div>
  )
}
