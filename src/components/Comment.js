export default function Comment () {
  return (
    <article className='media'>
      <figure className='media-left'>
        <p className='image is-48x48'>
          <img src='https://bulma.io/images/placeholders/96x96.png' />
        </p>
      </figure>
      <div className='media-content'>
        <div className='content'>
          <p>
            <strong>Sean Brown</strong>
            <br />
            Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis
            leo feugiat.
            <br />
            <small>
              <a>Like</a> · <a>Reply</a> · 2 hrs
            </small>
          </p>
        </div>
        {/* 
        <article className='media'>
          Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem
          cursus ullamcorper sit amet nec massa.
        </article>

        <article className='media'>
          Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
          Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
          tincidunt iaculis diam non, porta aliquet tortor.
        </article> */}
      </div>
    </article>
  )
}
