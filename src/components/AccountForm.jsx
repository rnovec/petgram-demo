import { useContext, useEffect, useState } from 'react'
import { updateProfile } from '../api/users'
import { AuthContext } from '../context/auth'

export default function ProfileForm () {
  const { user, setUser } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    username: '',
    fullname: '',
    email: ''
  })

  useEffect(() => {
    setForm(user)
  }, [])

  function onChange (e) {
    const val = e.target.value
    const attr = e.target.name
    setForm({ ...form, [attr]: val })
  }

  async function onSubmit (e) {
    e.preventDefault()
    setIsLoading(true)
    try {
      const postForm = form
      delete postForm.picture
      const data = await updateProfile(user.id, form)
      setUser(data)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className='box' onSubmit={onSubmit}>
      <h3>Basic Info</h3>
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Account</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <p className='control is-expanded has-icons-left'>
              <input
                className='input'
                type='text'
                placeholder='Username'
                name='username'
                onChange={onChange}
                value={form.username}
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-user'></i>
              </span>
            </p>
          </div>
          <div className='field'>
            <p className='control is-expanded has-icons-left'>
              <input
                className='input is-success'
                type='email'
                placeholder='Email'
                name='email'
                onChange={onChange}
                value={form.email}
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-envelope'></i>
              </span>
              {/* <span className='icon is-small is-right'>
                <i className='fas fa-check'></i>
              </span> */}
            </p>
          </div>
        </div>
      </div>

      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Fullname</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <p className='control is-expanded'>
              <input
                className='input'
                type='text'
                placeholder='First name'
                name='fullname'
                onChange={onChange}
                value={form.fullname}
              />
            </p>
          </div>
        </div>
      </div>
      <div className='field is-horizontal'>
        <div className='field-label'></div>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <button
                className={`button is-primary ${isLoading ? 'is-loading' : ''}`}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
