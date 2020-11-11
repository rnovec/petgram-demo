import { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/auth'

export default function Navbar () {
  const history = useHistory()
  const { logout } = useContext(AuthContext)

  function handleLogout () {
    logout()
    history.push('/login')
  }
  return (
    <div className='navbar is-inline-flex is-transparent'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          <img src='logo.png' />
        </Link>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-item'>
          <div className='control has-icons-left'>
            <input
              className='input is-rounded is-small has-text-centered'
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
        <Link to='/profile'>
          {' '}
          <a className='navbar-item'>
            <i className='material-icons'>person_outline</i>
          </a>
        </Link>

        <Link className='navbar-item' to='/settings'>
          <i className='material-icons'>settings</i>
        </Link>
        <a className='navbar-item' onClick={handleLogout}>
          <i className='material-icons has-text-danger'>logout</i>
        </a>
      </div>
    </div>
  )
}
