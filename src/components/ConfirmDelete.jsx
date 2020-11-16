import { useContext, useState } from 'react'
import { PostContext } from '../context/posts'

export function ConfirmDelete ({ post_id }) {
  const { deletePost } = useContext(PostContext)
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  function toggleModal (e) {
    e.preventDefault()
    setShowModal(!showModal)
  }
  async function onDeletePost () {
    setIsLoading(true)
    await deletePost(post_id)
    setShowModal(false)
    setIsLoading(false)
  }
  return (
    <>
      <a onClick={toggleModal} className='dropdown-item has-text-danger'>
        Delete post
      </a>
      <div className={`modal ${showModal ? 'is-active' : ''}`}>
        <div className='modal-background'></div>
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>Are you sure?</p>
          </header>
          <section className='modal-card-body'>
            This action will <b>permanently destroy the post</b>.
          </section>
          <footer className='modal-card-foot has-text-left'>
            <button
              className={`button is-danger ${isLoading ? 'is-loading' : ''}`}
              onClick={onDeletePost}
            >
              Yes, I'm sure
            </button>
            <button className='button' onClick={toggleModal}>
              No, take me back
            </button>
          </footer>
        </div>
      </div>
    </>
  )
}
