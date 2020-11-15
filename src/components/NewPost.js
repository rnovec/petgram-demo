import { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { createPost } from '../api/posts'
import { AuthContext } from '../context/auth'
import { PostContext } from '../context/posts'

export default function NewPost () {
  const history = useHistory()
  const { user, defaultAvatar } = useContext(AuthContext)
  const { addPost } = useContext(PostContext)
  const [selectedFile, setSelectedFile] = useState(null)
  const [filename, setFilename] = useState('')
  const [description, setDescription] = useState('')
  const [isLoading, setIsloading] = useState(false)

  function handleChange (e) {
    setSelectedFile(e.target.files[0])
    setFilename(e.target.files[0].name.slice(0, 10))
  }

  function onDescriptionChange (e) {
    setDescription(e.target.value)
  }

  async function onSubmit (e) {
    e.preventDefault()
    if (!user.picture) history.push('/profile')
    if (filename && description) {
      setIsloading(true)
      const form_data = new FormData()
      form_data.append('photo', selectedFile, selectedFile.name)
      form_data.append('description', description)
      form_data.append('user_id', user.id)
      try {
        const data = await createPost(form_data)
        addPost(data)
        setDescription('')
        setSelectedFile({})
        setFilename('')
      } catch (error) {
      } finally {
        setIsloading(false)
      }
    }
  }

  return (
    <div className='card'>
      <header className='card-header'>
        <p className='card-header-title'>
          <span className='icon is-medium'>
            <i className='fas fa-image' aria-hidden='true'></i>
          </span>
          Create a new post
        </p>
      </header>
      <div className='card-content'>
        <article className='media'>
          <figure className='media-left image is-48x48'>
            <img className='is-rounded' src={user.picture || defaultAvatar} />
          </figure>
          <div className='media-content'>
            <div className='field'>
              <p className={`control ${isLoading ? 'is-loading' : ''}`}>
                <textarea
                  className='textarea'
                  onChange={onDescriptionChange}
                  rows='3'
                  placeholder='Add a description...'
                ></textarea>
              </p>
            </div>
          </div>
        </article>
        <div className='field'>
          <div className='control'>
            <input
              id='photo'
              accept="image/png, image/jpeg"
              className='file-input'
              onChange={handleChange}
              type='file'
              name='resume'
            />
          </div>
        </div>
      </div>
      <footer className='card-footer'>
        <label htmlFor='photo' className='card-footer-item file-label'>
          <i className='material-icons'>perm_media</i>&nbsp;
          {filename ? filename + '...' : 'Add photo'}
        </label>
        {isLoading ? (
          <a className='card-footer-item button is-white is-loading'>
            <i className='material-icons'>send</i>&nbsp;Publish
          </a>
        ) : (
          <a onClick={onSubmit} className='card-footer-item'>
            <i className='material-icons'>send</i>&nbsp;Publish
          </a>
        )}
      </footer>
    </div>
  )
}
