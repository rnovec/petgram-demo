import { useContext } from 'react'
import { AuthContext } from '../context/auth'

export default function AddComment () {
  const { user, defaultAvatar } = useContext(AuthContext)

  return (
    <article className='media'>
      <figure className='media-left'>
        <p className='image is-48x48'>
          <img className='is-rounded' src={user.picture || defaultAvatar} />
        </p>
      </figure>
      <div className='media-content'>
        <div className='field'>
          <p className='control'>
            <textarea
              className='textarea'
              rows='3'
              placeholder='Add a comment...'
            ></textarea>
          </p>
        </div>
        <div className='field'>
          <p className='control'>
            <button className='button is-primary is-fullwidth'>
              Post comment
            </button>
          </p>
        </div>
      </div>
    </article>
  )
}
