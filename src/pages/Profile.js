import { useState } from 'react'
import Main from '../layouts/Main'
import Profile from '../layouts/Profile'
import PostPreview from '../components/PostPreview'
import ProfileForm from '../components/ProfileForm'
import '../css/profile.css'
import '../css/profile-card.css'

export default function ProfileReview () {
  const [isEdit, setIsEdit] = useState(false)
  function toggleTab () {
    setIsEdit(!isEdit)
  }
  return (
    <Main>
      <br />
      <Profile>
        <div className='column is-8'>
          <div className='tabs is-centered is-boxed is-medium'>
            <ul>
              <li className={`${!isEdit ? 'is-active' : ''}`}>
                <a onClick={toggleTab}>
                  <span className='icon is-small'>
                    <i className='fas fa-image' aria-hidden='true'></i>
                  </span>
                  <span>Posts</span>
                </a>
              </li>
              <li className={`${isEdit ? 'is-active' : ''}`}>
                <a onClick={toggleTab}>
                  <span className='icon is-small'>
                    <i className='fas fa-cog' aria-hidden='true'></i>
                  </span>
                  <span>Edit Profile</span>
                </a>
              </li>
            </ul>
          </div>

          <div className='box content'>
            {isEdit ? <ProfileForm /> : <PostPreview />}
          </div>
        </div>
      </Profile>
    </Main>
  )
}
