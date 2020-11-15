import { timeSince } from '../util/time'
import PostOptions from './PostOptions'

export default function PostPreview ({ post }) {
  return (
    <article className='media box'>
      <div className='media-left'>
        <p >
          <img className='image is-64x64' src={post.photo} />
        </p>
      </div>
      <div className='media-content'>
        <div className='content'>
          <strong>{post.user.fullname}</strong> ·{' '}
          <span>@{post.user.username}</span> ·{' '}
          <small className='has-text-grey'>
            <time>{timeSince(post.created)}</time> ago
          </small>
          <br />
          {post.description}
        </div>
        <nav className='level is-mobile'>
          <div className='level-left'>
            &nbsp; &nbsp;
            <a className='level-item'>
              <span className='icon is-small'>
                <i className='fas fa-comments'></i> 10
              </span>
            </a>
            &nbsp; &nbsp;
            <a className='level-item has-text-danger'>
              <span className='icon is-small'>
                <i className='fas fa-heart'></i> 1
              </span>
            </a>
          </div>
        </nav>
      </div>
      <div className='media-right'>
        <PostOptions/>
      </div>
      <hr/>
    </article>
  )
}
