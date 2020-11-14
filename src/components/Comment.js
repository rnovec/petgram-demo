import { useContext } from 'react'
import { AuthContext } from '../context/auth'
import { timeSince } from '../util/time'


export default function Comment({ comment }) {
  const { defaultAvatar } = useContext(AuthContext)

  return (
    <article className='media'>
      <figure className='media-left'>
        <p className='image is-32x32'>
          <img className='is-rounded' src={comment.user.picture || defaultAvatar} />
        </p>
      </figure>
      <div className='media-content'>
        <div className='content'>
          <p>
            <strong>{comment.user.fullname}</strong>
            <br />
            {comment.message}
            <br />
            <small className='has-text-grey'>
              <a href="#add-comment">Reply</a> · {timeSince(comment.created)} ago
            </small>
          </p>
        </div>
        {/* 
        <article className='media'>
          Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem
          cursus ullamcorper sit amet nec massa.
        </article>

        <article className='media'>
          Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
          Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
          tincidunt iaculis diam non, porta aliquet tortor.
        </article> */}
      </div>
    </article>
  )
}
