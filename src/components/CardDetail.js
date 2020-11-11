export default function CardDetail () {
  return (
    <div className='card'>
      <div className='header'>
        <div className='media'>
          <div className='media-left'>
            <figure className='image is-48x48'>
              <img
                className='is-rounded'
                src='https://source.unsplash.com/random/96x96'
                alt='Placeholder'
              />
            </figure>
          </div>
          <div className='media-content'>
            <p className='title is-4'>John Smith</p>
            <p className='subtitle is-6'>@johnsmith</p>
          </div>
        </div>
      </div>
      <div className='card-image'>
        <figure className='image is-4by3'>
          <img
            src='https://source.unsplash.com/random/1280x960'
            alt='Placeholder'
          />
        </figure>
      </div>
      <div className='card-content'>
        <div className='level is-mobile'>
          <div className='level-left'>
            <div className='level-item has-text-centered'>
              <a href=''>
                <i className='material-icons'>favorite_border</i>
              </a>
            </div>
            <div className='level-item has-text-centered'>
              <div>
                <a href=''>
                  <i className='material-icons'>chat_bubble_outline</i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='content'>
          <p>
            <strong>32 Likes</strong>
          </p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
          <a>@bulmaio</a>.<a href='#'>#css</a>
          <a href='#'>#responsive</a>
          <br />
          <time dateTime='2018-1-1'>11:09 PM - 1 Jan 2018</time>
        </div>
      </div>
      <div className='card-footer'>
        <div className='column is-12'>
          <div className='field is-grouped'>
            <div className='control is-expanded'>
              <textarea
                className='textarea is-rounded'
                rows='1'
                type='text'
                placeholder='Enter your email'
              />
            </div>
            <div className='control'>
              <a className='button is-rounded is-info'>
                <i className='material-icons'>send</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
