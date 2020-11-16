import PostOptions from './PostOptions'
import PostContent from './PostContent'

export default function PostPreview ({ post }) {
  return (
    <article className='media box'>
      <div className='media-left'>
        <p>
          <img className='image is-64x64' src={post.photo} />
        </p>
      </div>
      <PostContent post={post} />
      <div className='media-right'>
        <PostOptions post={post} />
      </div>
      <hr />
    </article>
  )
}
