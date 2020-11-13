import Main from '../layouts/Main'
import ProfileForm from '../components/ProfileForm'
import { useContext } from 'react'
import { AuthContext } from '../context/auth'
import '../css/profile.css'
import '../css/profile-card.css'

export default function Profile () {
  const { user, profile, defaultAvatar } = useContext(AuthContext)

  return (
    <Main>
      <br />
      <section className='section container'>
        <div className='columns'>
          <div className='column is-4 '>
            <aside className='menu'>
              <ul className='menu-list'>
                <div className='card box has-text-centered'>
                  <figure className='avatar'>
                    <img width='200' src={profile.picture || defaultAvatar} />
                  </figure>
                  <div className='media-content'>
                    <p className='title is-4'>
                      {user.first_name} {user.last_name}
                    </p>
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
          <div className='column is-8'>
            <div className='tabs is-centered is-boxed is-medium'>
              <ul>
                <li className='is-active'>
                  <a>
                    <span className='icon is-small'>
                      <i className='fas fa-image' aria-hidden='true'></i>
                    </span>
                    <span>Posts</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className='icon is-small'>
                      <i className='fas fa-cog' aria-hidden='true'></i>
                    </span>
                    <span>Edit Profile</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className='box content'>
              <ProfileForm />
            </div>
          </div>
        </div>
      </section>
    </Main>
  )
}
