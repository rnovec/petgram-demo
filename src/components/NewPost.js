export default function NewPost () {
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
                  placeholder='Add a description...'
                ></textarea>
              </p>
            </div>
          </div>
        </article>
      </div>
      <footer className='card-footer'>
        <a href='#' className='card-footer-item'>
          <i className='material-icons'>perm_media</i>&nbsp;Add photo
        </a>
        <a href='#' className='card-footer-item'>
          <i className='material-icons'>send</i>&nbsp;Publish
        </a>
      </footer>
    </div>
  )
}
