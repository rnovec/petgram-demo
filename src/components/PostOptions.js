import { useState } from 'react'
import { ConfirmDelete } from './ConfirmDelete'

export default function PostOptions () {
  const [showOptions, setShowOptions] = useState(false)
  function toggleOptions (e) {
    e.preventDefault()
    setShowOptions(!showOptions)
  }
  return (
    <div class={`dropdown ${showOptions ? 'is-active' : ''} is-right`}>
      <div class='dropdown-trigger'>
        <a href='' onClick={toggleOptions}>
          <i className='material-icons'>more_vert</i>
        </a>
      </div>
      <div class='dropdown-menu' id='dropdown-menu3' role='menu'>
        <div class='dropdown-content'>
          <a href='#' class='dropdown-item'>
            Edit
          </a>
          <a href='#' class='dropdown-item'>
            Share
          </a>
          <hr class='dropdown-divider' />
          <ConfirmDelete/>
        </div>
      </div>
    </div>
  )
}
