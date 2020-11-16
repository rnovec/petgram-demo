import { useContext, useState } from 'react'
import { createComment } from '../api/posts'
import { AuthContext } from '../context/auth'

export default function CommentBox ({ post_id, ...props }) {
  const { user, defaultAvatar } = useContext(AuthContext)
  const [message, setMessage] = useState('')

  function onChangeMessage (e) {
    e.preventDefault()
    setMessage(e.target.value)
  }

  async function onSubmit (e) {
    e.preventDefault()
    if (message.trim()) {
      const data = await createComment({
        user_id: user.id,
        post_id,
        message
      })
      setMessage('')
      props.onComment(data)
    }
  }

  return (
    <article className='media'>
      <figure className='media-left'>
        <p className='image is-48x48'>
          <img className='is-rounded' src={user.picture || defaultAvatar} />
        </p>
      </figure>
      <div className='media-content'>
        <form onSubmit={onSubmit}>
          <div className='field'>
            <p className='control'>
              <textarea
                className='textarea'
                rows='3'
                value={message}
                onChange={onChangeMessage}
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
        </form>
      </div>
    </article>
  )
}
