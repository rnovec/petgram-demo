import { useContext, useState } from 'react'
import { PostContext } from '../context/posts'
import ConfirmDelete from './ConfirmDelete'
import PostEdit from './PostEdit'

export default function PostOptions ({ post }) {
  const [showOptions, setShowOptions] = useState(false)
  const { currentPost, setCurrentPost } = useContext(PostContext)
  function toggleOptions (e) {
    e.preventDefault()
    setShowOptions(!showOptions)
  }
  return (
    <div className={`dropdown ${showOptions ? 'is-active' : ''} is-right`}>
      <div className='dropdown-trigger'>
        <a href='' onClick={toggleOptions}>
          <i className='material-icons'>more_vert</i>
        </a>
      </div>
      <div className='dropdown-menu' id='dropdown-menu3' role='menu'>
        <div className='dropdown-content'>
          <a onClick={() => setCurrentPost(post)} className='dropdown-item'>
            Edit
          </a>
          {currentPost.uuid && <PostEdit post={post} />}
          <hr className='dropdown-divider' />
          <ConfirmDelete post_id={post.uuid} />
        </div>
      </div>
    </div>
  )
}
