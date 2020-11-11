export default function AddComment () {
  return (
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
              placeholder='Add a comment...'
            ></textarea>
          </p>
        </div>
        <div className='field'>
          <p className='control'>
            <button className='button is-primary is-fullwidth'>
              Post comment
            </button>
          </p>
        </div>
      </div>
    </article>
  )
}
