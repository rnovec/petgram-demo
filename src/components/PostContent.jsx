import { timeSince } from '../util/time'

export default function PostContent ({ post }) {
  return (
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
            {post.comments.length} &nbsp;
            <span className='icon is-small'>
              <i className='fas fa-comments'></i>
            </span>
          </a>
          &nbsp; &nbsp;
          <a className='level-item has-text-danger'>
            <span className='icon is-small'>
              {post.likes.length}&nbsp;<i className='fas fa-heart'></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  )
}
