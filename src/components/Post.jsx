import { useContext, useEffect, useState } from 'react'
import { getPostComments, postLike } from '../api/posts'
import { AuthContext } from '../context/auth'
import { timeSince } from '../util/time'
import AddComment from './CommentBox'
import Comment from './Comment'
import PostOptions from './PostOptions'

export default function Post ({ post }) {
  const { user, defaultAvatar } = useContext(AuthContext)
  const [showComments, setShowComment] = useState(false)
  const [likeCont, setLikeCont] = useState(0)
  const [isLiked, setIsliked] = useState(false)
  const [comments, setComments] = useState([])

  useEffect(() => {
    setLikeCont(post.likes.length)
    if (post.likes.indexOf(user.id) !== -1) setIsliked(true)
  }, [user])

  async function toggleComments (e) {
    const res = await getPostComments(post.uuid)
    setComments(res.results)
    setShowComment(!showComments)
  }

  async function likeDislike (e) {
    e.preventDefault()
    if (!isLiked) {
      await postLike(post.uuid, {
        user: user.id,
        action: 'liked'
      })
      setLikeCont(likeCont + 1)
      setIsliked(true)
    } else {
      await postLike(post.uuid, {
        user: user.id,
        action: 'dislike'
      })
      setLikeCont(likeCont - 1)
      setIsliked(false)
    }
  }

  return (
    <div className='card'>
      <div className='header'>
        <div className='media'>
          <div className='media-left'>
            <figure className='image is-48x48'>
              <img
                className='is-rounded'
                src={post.user.picture || defaultAvatar}
                alt='Placeholder'
              />
            </figure>
          </div>
          <div className='media-content'>
            <p className='title is-4'>{post.user.fullname}</p>
            <p className='subtitle is-6'>@{post.user.username}</p>
          </div>
          {user.id === post.user.id && (
            <div className='media-right'>
              <PostOptions post={post} />
            </div>
          )}
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
              <a onClick={likeDislike}>
                <i className='material-icons has-text-danger'>
                  {isLiked ? 'favorite' : 'favorite_border'}
                </i>
              </a>
            </div>
            <div className='level-item has-text-centered'>
              <div>
                <a onClick={toggleComments}>
                  <i className='material-icons'>chat_bubble_outline</i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='content'>
          <strong>{likeCont} Likes</strong>
          <br />
          {post.description}
          {/* <a>@bulmaio</a>.<a href='#'>#css</a>
          <a href='#'>#responsive</a> */}
          <br />
          <time>{timeSince(post.created)}</time> ago
        </div>
        {showComments &&
          comments.map(comment => (
            <Comment key={comment.uuid} comment={comment} />
          ))}
      </div>

      <div id='add-comment' className='card-footer'>
        <div className='column is-12'>
          <AddComment post_id={post.uuid} onComment={toggleComments} />
        </div>
      </div>
    </div>
  )
}
