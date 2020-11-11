import { useContext, useState } from 'react'
import { AuthContext } from '../context/auth'
import { timeSince } from '../util/time'
import AddComment from './AddComment'
import Comment from './Comment'

export default function Post ({ post }) {
  const { defaultAvatar } = useContext(AuthContext)
  const [showComments, setShowComment] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  function toggleComments (e) {
    setShowComment(!showComments)
    e.preventDefault()
  }

  function likeDislike (e) {
    setIsLiked(!isLiked)
    e.preventDefault()
  }

  return (
    <div className='card'>
      <div className='header'>
        <div className='media'>
          <div className='media-left'>
            <figure className='image is-48x48'>
              <img
                className='is-rounded'
                src={post.profile.picture || defaultAvatar}
                alt='Placeholder'
              />
            </figure>
          </div>
          <div className='media-content'>
            <p className='title is-4'>
              {post.profile.user.first_name} {post.profile.user.last_name}
            </p>
            <p className='subtitle is-6'>@{post.profile.user.username}</p>
          </div>
        </div>
      </div>
      <div className='card-image'>
        <figure className='image is-4by3'>
          <img src={post.photo} alt='Placeholder' />
        </figure>
      </div>
      <div className='card-content'>
        <div className='level is-mobile'>
          <div className='level-left'>
            <div className='level-item has-text-centered'>
              <a href='' onClick={likeDislike}>
                <i className='material-icons has-text-danger'>
                  {isLiked ? 'favorite' : 'favorite_border'}
                </i>
              </a>
            </div>
            <div className='level-item has-text-centered'>
              <div>
                <a href='' onClick={toggleComments}>
                  <i className='material-icons'>chat_bubble_outline</i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='content'>
          <strong>32 Likes</strong>
          <br />
          {post.description}
          {/* <a>@bulmaio</a>.<a href='#'>#css</a>
          <a href='#'>#responsive</a> */}
          <br />
          <time dateTime='2018-1-1'>{timeSince(post.created)}</time> ago
        </div>
        {showComments && [1, 2, 3, 4, 5].map(i => <Comment key={i} />)}
      </div>

      <div className='card-footer'>
        <div className='column is-12'>
          <AddComment />
        </div>
      </div>
    </div>
  )
}
