import Main from '../layouts/Main'
import { useContext } from 'react'
import { AuthContext } from '../context/auth'
import '../css/profile.css'
import '../css/profile-card.css'

export default function Profile ({ children }) {
  const { user, defaultAvatar } = useContext(AuthContext)

  return (
    <section className='section container'>
      <div className='columns'>
        <div className='column is-4 '>
          <aside className='menu'>
            <ul className='menu-list'>
              <div className='card box has-text-centered'>
                <figure className='avatar'>
                  <img width='200' src={user.picture || defaultAvatar} />
                </figure>
                <div className='media-content'>
                  <p className='title is-4'>{user.fullname}</p>
                  <p className='subtitle is-6'>@{user.username}</p>
                  <ul className='has-text-left'>
                    <li>
                      <span className='icon'>
                        <i className='fas fa-envelope' aria-hidden='true'></i>
                      </span>
                      &nbsp; {user.email}
                    </li>
                  </ul>
                </div>
                <br />
                <footer className='card-footer'>
                  <div className='card-footer-item'>
                    <span className='icon'>
                      <i className='fas fa-image'></i>&nbsp;0
                    </span>
                  </div>
                  <div className='card-footer-item'>
                    <span className='icon'>
                      <i className='fas fa-heart'></i>&nbsp;0
                    </span>
                  </div>
                </footer>
              </div>
            </ul>
          </aside>
        </div>
        {children}
      </div>
    </section>
  )
}
