import { useState } from 'react'

export function ConfirmDelete () {
  const [showModal, setShowModal] = useState(false)
  function toggleModal(e) {
    e.preventDefault();
    setShowModal(!showModal)
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
            <button className='button is-danger'>Remove</button>
            <button className='button' onClick={toggleModal}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </>
  )
}
