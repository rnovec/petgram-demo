import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../css/profile.css'
import '../css/profile-card.css'

export default function Profile () {
  return (
    <>
      <Navbar />
      <br />
      <section className='section container'>
        <div className='columns'>
          <div className='column is-4 '>
            <aside className='menu'>
              <ul className='menu-list'>
                <div className='card box has-text-centered'>
                  <figure className='avatar'>
                    <img src='https://placehold.it/128x128' />
                  </figure>
                  <div className='media-content'>
                    <p className='title is-4'>Raul Armin</p>
                    <p className='subtitle is-6'>@rnovec98</p>
                    <ul className='has-text-left'>
                      <li>
                        <span class='icon'>
                          <i class='fas fa-envelope' aria-hidden='true'></i>
                        </span>
                        &nbsp; rnovelo.cruz98@gmail.com
                      </li>
                    </ul>
                  </div>
                  <br />
                  <footer class='card-footer'>
                    <a href='#' class='card-footer-item'>
                      <span class='icon'>
                        <i class='fas fa-image'></i>
                      </span>
                    </a>
                    <a href='#' class='card-footer-item'>
                      <span class='icon'>
                        <i class='fas fa-heart'></i>
                      </span>
                    </a>
                  </footer>
                </div>
              </ul>
            </aside>
          </div>
          <div className='column is-8'>
            <div class='tabs is-centered is-boxed is-medium'>
              <ul>
                <li class='is-active'>
                  <a>
                    <span class='icon is-small'>
                      <i class='fas fa-image' aria-hidden='true'></i>
                    </span>
                    <span>Posts</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span class='icon is-small'>
                      <i class='fas fa-cog' aria-hidden='true'></i>
                    </span>
                    <span>Edit Profile</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className='box content'>
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
              <article className='post'>
                <h4>How can I make a bulma button go full width?</h4>
                <div className='media'>
                  <div className='media-left'>
                    <p className='image is-32x32'>
                      <img src='http://bulma.io/images/placeholders/128x128.png' />
                    </p>
                  </div>
                  <div className='media-content'>
                    <div className='content'>
                      <p>
                        <a href='#'>@red</a> replied 40 minutes ago &nbsp;
                        <span className='tag'>Question</span>
                      </p>
                    </div>
                  </div>
                  <div className='media-right'>
                    <span className='has-text-grey-light'>
                      <i className='fa fa-comments'></i> 0
                    </span>
                  </div>
                </div>
              </article>
              <article className='post'>
                <h4>
                  TypeError: Data must be a string or a buffer when trying touse
                  vue-bulma-tabs
                </h4>
                <div className='media'>
                  <div className='media-left'>
                    <p className='image is-32x32'>
                      <img src='http://bulma.io/images/placeholders/128x128.png' />
                    </p>
                  </div>
                  <div className='media-content'>
                    <div className='content'>
                      <p>
                        <a href='#'>@jsmith</a> replied 53 minutes ago &nbsp;
                        <span className='tag'>Question</span>
                      </p>
                    </div>
                  </div>
                  <div className='media-right'>
                    <span className='has-text-grey-light'>
                      <i className='fa fa-comments'></i> 13
                    </span>
                  </div>
                </div>
              </article>
              <article className='post'>
                <h4>How to vertically center elements in Bulma?</h4>
                <div className='media'>
                  <div className='media-left'>
                    <p className='image is-32x32'>
                      <img src='http://bulma.io/images/placeholders/128x128.png' />
                    </p>
                  </div>
                  <div className='media-content'>
                    <div className='content'>
                      <p>
                        <a href='#'>@brown</a> replied 3 hours ago &nbsp;
                        <span className='tag'>Question</span>
                      </p>
                    </div>
                  </div>
                  <div className='media-right'>
                    <span className='has-text-grey-light'>
                      <i className='fa fa-comments'></i> 2
                    </span>
                  </div>
                </div>
              </article>
              <article className='post'>
                <h4>
                  I'm trying to use hamburger menu on bulma css, but it doesn't
                  work. What is wrong?
                </h4>
                <div className='media'>
                  <div className='media-left'>
                    <p className='image is-32x32'>
                      <img src='http://bulma.io/images/placeholders/128x128.png' />
                    </p>
                  </div>
                  <div className='media-content'>
                    <div className='content'>
                      <p>
                        <a href='#'>@hamburgler</a> replied 5 hours ago &nbsp;
                        <span className='tag'>Question</span>
                      </p>
                    </div>
                  </div>
                  <div className='media-right'>
                    <span className='has-text-grey-light'>
                      <i className='fa fa-comments'></i> 2
                    </span>
                  </div>
                </div>
              </article>
              <article className='post'>
                <h4>How to make tiles wrap with Bulma CSS?</h4>
                <div className='media'>
                  <div className='media-left'>
                    <p className='image is-32x32'>
                      <img src='http://bulma.io/images/placeholders/128x128.png' />
                    </p>
                  </div>
                  <div className='media-content'>
                    <div className='content'>
                      <p>
                        <a href='#'>@rapper</a> replied 3 hours ago &nbsp;
                        <span className='tag'>Question</span>
                      </p>
                    </div>
                  </div>
                  <div className='media-right'>
                    <span className='has-text-grey-light'>
                      <i className='fa fa-comments'></i> 2
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
