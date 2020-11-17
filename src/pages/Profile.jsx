import { useContext, useEffect, useState } from 'react'
import Main from '../layouts/Main'
import Profile from '../layouts/Profile'
import PostPreview from '../components/PostPreview'
import ProfileForm from '../components/ProfileForm'
import AccountForm from '../components/AccountForm'
import '../css/profile.css'
import '../css/profile-card.css'
import { getUserPosts } from '../api/users'
import { AuthContext } from '../context/auth'
import { PostContext } from '../context/posts'
import useInfiniteScroll from '../hooks/useInifiniteScroll'

export default function ProfileReview ({ match: { params } }) {
  const { user } = useContext(AuthContext)
  const { currentPost } = useContext(PostContext)
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchUserPosts)
  const [isEdit, setIsEdit] = useState(false)
  const [posts, setPosts] = useState([])
  const [total, setTotal] = useState(0)
  const [listQuery, setListQuery] = useState({
    limit: 10,
    offset: 0
  })
  function toggleTab () {
    setIsEdit(!isEdit)
  }
  useEffect(() => {
    fetchUserPosts()
  }, [user, currentPost])

  async function fetchUserPosts () {
    console.log(posts.length, total)
    if (posts.length <= total && listQuery.offset > total) {
      setIsFetching(false)
      return
    }
    setIsFetching(true)
    await getUserPosts(params.id).then(res => {
      setPosts(res.results)
      setTotal(res.count)
    })
    setIsFetching(false)
    setListQuery({
      limit: listQuery.limit,
      offset: listQuery.offset + listQuery.limit
    })
  }

  return (
    <Main>
      <br />
      <Profile total={total}>
        <div className='column is-8'>
          <div className='tabs is-centered is-boxed is-medium'>
            <ul>
              <li className={`${!isEdit ? 'is-active' : ''}`}>
                <a onClick={toggleTab}>
                  <span className='icon is-small'>
                    <i className='fas fa-image' aria-hidden='true'></i>
                  </span>
                  <span>Posts</span>
                </a>
              </li>
              <li className={`${isEdit ? 'is-active' : ''}`}>
                <a onClick={toggleTab}>
                  <span className='icon is-small'>
                    <i className='fas fa-cog' aria-hidden='true'></i>
                  </span>
                  <span>Edit Profile</span>
                </a>
              </li>
            </ul>
          </div>

          <div className='box content'>
            {isEdit ? (
              <>
                <AccountForm />
                <ProfileForm />
              </>
            ) : (
              <>
                {' '}
                {!posts.length && !isFetching ? (
                  <div className='notification is-link'>
                    <article className='media'>
                      <div className='media-left'>
                        <span className='icon'>
                          <i className='fas fa-sad-tear'></i>
                        </span>
                      </div>
                      <div className='media-content'>
                        Nothing's here…{' '}
                        <strong>You do not have any post yet</strong>.
                      </div>
                      <div className='media-right'>
                        {/* <button className='button is-small is-primary'>
                          Dismiss
                        </button> */}
                      </div>
                    </article>
                  </div>
                ) : (
                  posts.map(post => <PostPreview key={post.uuid} post={post} />)
                )}
                {isFetching && (
                  <div className='has-text-centered'>
                    Loading posts...
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </Profile>
    </Main>
  )
}
