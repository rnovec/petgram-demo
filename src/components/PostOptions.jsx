import { useState } from 'react'
import { ConfirmDelete } from './ConfirmDelete'

export default function PostOptions ({ post }) {
  const [showOptions, setShowOptions] = useState(false)
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
          
          <hr className='dropdown-divider' />
          <ConfirmDelete post_id={post.uuid} />
        </div>
      </div>
    </div>
  )
}
