import { useContext, useEffect, useState } from 'react'
import { createOrUpdateProfile } from '../api/users'
import { AuthContext } from '../context/auth'

export default function ProfileForm () {
  const { user } = useContext(AuthContext)
  const [form, setForm] = useState({
    id: null,
    user: null,
    picture: '',
    address: '',
    phone: ''
  })

  useEffect(() => {
    setForm(user)
    console.log(user)
  }, [])

  function onChange (e) {
    const val = e.target.value
    const attr = e.target.name
    setForm({ ...form, [attr]: val })
  }

  function onSubmit(e) {
    e.preventDefault();
    createOrUpdateProfile(user.id, form)
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Profile</h3>

      <div className='field is-horizontal'>
        <div className='field-label'>
          <label className='label'>Avatar</label>
        </div>
        <div className='field-body'>
          <div className='file has-name'>
            <label className='file-label'>
              <input className='file-input' type='file' name='resume' />
              <span className='file-cta'>
                <span className='file-icon'>
                  <i className='fas fa-upload'></i>
                </span>
                <span className='file-label'>Change avatar</span>
              </span>
              <span className='file-name'>
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Address</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='Address'
                name='address'
                onChange={onChange}
                value={form.address}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Phone</label>
        </div>
        <div className='field-body'>
          <div className='field is-expanded'>
            <div className='field has-addons'>
              <p className='control'>
                <a className='button is-static'>+52</a>
              </p>
              <p className='control is-expanded'>
                <input
                  className='input'
                  type='tel'
                  placeholder='Your phone number'
                  name='phone'
                  onChange={onChange}
                  value={form.phone}
                />
              </p>
            </div>
            <p className='help'>Do not enter the first zero</p>
          </div>
        </div>
      </div>

      <div className='field is-horizontal'>
        <div className='field-label'></div>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <button className='button is-primary'>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
