import { useEffect, useState } from 'react'
import PostContent from './PostContent'

export default function EditPostModal ({ post }) {
  const [selectedFile, setSelectedFile] = useState(null)
  const [filename, setFilename] = useState('')
  const [description, setDescription] = useState('')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setDescription(post.description)
  }, [])

  function toggleModal (e) {
    e.preventDefault()
    setShowModal(!showModal)
  }
  function handleChange (e) {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0])
      setFilename(e.target.files[0].name.slice(0, 10))
    }
  }

  function onChange (e) {
    setDescription(e.target.value)
  }

  return (
    <>
      {' '}
      <a onClick={toggleModal} className='dropdown-item'>
        Edit
      </a>
      <div className={`modal ${showModal ? 'is-active' : ''}`}>
        <div className='modal-background'></div>
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>Edit Post</p>
            <button
              className='delete'
              aria-label='close'
              onClick={toggleModal}
            ></button>
          </header>
          <section className='modal-card-body'>
            <article className='media'>
              <figure className='media-left'>
                <img className='image is-128x128' src={post.photo} />
              </figure>
              <PostContent post={post} />
            </article>
            <form action=''>
              <div className='field'>
                <label className='label'>Description</label>
                <div className='control'>
                  <textarea
                    className='textarea'
                    placeholder='...'
                    onChange={onChange}
                    value={description}
                  ></textarea>
                </div>
              </div>
              <div className='field'>
                <div className='file has-name'>
                  <label className='file-label'>
                    <input
                      className='file-input'
                      onChange={handleChange}
                      type='file'
                      name='resume'
                    />
                    <span className='file-cta'>
                      <span className='file-icon'>
                        <i className='fas fa-upload'></i>
                      </span>
                      <span className='file-label'>Change photo</span>
                    </span>
                    {filename && <span className='file-name'>{filename}</span>}
                  </label>
                </div>
              </div>
            </form>
          </section>
          <footer className='modal-card-foot'>
            <button className='button is-success'>Save changes</button>
            <button className='button' onClick={toggleModal}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </>
  )
}
