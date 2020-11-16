import { useContext, useEffect, useState } from 'react'
import { updatePost } from '../api/posts'
import { PostContext } from '../context/posts'
import PostContent from './PostContent'

export default function EditPostModal ({ post }) {
  const [selectedFile, setSelectedFile] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [filename, setFilename] = useState('')
  const [description, setDescription] = useState('')
  const { currentPost, setCurrentPost } = useContext(PostContext)

  useEffect(() => {
    setDescription(currentPost.description)
  }, [currentPost])


  function onFileChange (e) {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0])
      setFilename(e.target.files[0].name.slice(0, 10))
    }
  }

  function onChange (e) {
    setDescription(e.target.value)
  }

  async function onSubmit (e) {
    e.preventDefault()
    setIsLoading(true)
    try {
      const form_data = new FormData()
      if (selectedFile.name)
        form_data.append('photo', selectedFile, selectedFile.name)
      form_data.append('description', description)
      const data = await updatePost(post.uuid, form_data, {
        'Content-Type': 'multipart/form-data'
      })
      setSelectedFile({})
      setFilename('')
      setCurrentPost(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {' '}
      <div className={`modal ${currentPost.uuid ? 'is-active' : ''}`}>
        <div className='modal-background'></div>
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>Edit Post</p>
            <button
              className='delete'
              aria-label='close'
              onClick={() => setCurrentPost({})}
            ></button>
          </header>
          <section className='modal-card-body'>
            <article className='media'>
              <figure className='media-left'>
                <img className='image is-128x128' src={currentPost.photo} />
              </figure>
              <PostContent post={currentPost} />
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
                      onChange={onFileChange}
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
            <button
              className={`button is-primary ${isLoading ? 'is-loading' : ''}`}
              onClick={onSubmit}
            >
              Save changes
            </button>
            <button className='button' onClick={() => setCurrentPost({})}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </>
  )
}
