import { useState } from 'react'

export default function NewPost () {
  const [filename, setFilename] = useState('')

  function handleChange (e) {
    setFilename(e.target.files[0].name.slice(0, 10))
  }

  return (
    <div className='card'>
      <header className='card-header'>
        <p className='card-header-title'>Create a new post</p>
      </header>
      <div className='card-content'>
        <article className='media'>
          <figure className='media-left'>
            <p className='image is-48x48'>
              <img src='https://bulma.io/images/placeholders/128x128.png' />
            </p>
          </figure>
          <div className='media-content'>
            <div className='field'>
              <p className='control'>
                <textarea
                  className='textarea'
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
        <a href='#' className='card-footer-item'>
          <i className='material-icons'>send</i>&nbsp;Publish
        </a>
      </footer>
    </div>
  )
}
