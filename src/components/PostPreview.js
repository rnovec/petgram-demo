export default function PostPreview () {
  return (
    <article className='post'>
      <h4>Bulma: How do you center a button in a box?</h4>
      <div className='media'>
        <div className='media-left'>
          <p className='image is-32x32'>
            <img src='http://bulma.io/images/placeholders/128x128.png' />
          </p>
        </div>
        <div className='media-content'>
          <div className='content'>
            <p>
              <a href='#'>@jsmith</a> replied 34 minutes ago &nbsp;
              <span className='tag'>Question</span>
            </p>
          </div>
        </div>
        <div className='media-right'>
          <span className='has-text-grey-light'>
            <i className='fa fa-comments'></i> 1
          </span>
          &nbsp;
          <span className='has-text-danger'>
            <i className='fa fa-heart'></i> 1
          </span>
        </div>
      </div>
    </article>
  )
}
