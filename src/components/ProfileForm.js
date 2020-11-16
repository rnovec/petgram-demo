import { useContext, useEffect, useState } from 'react'
import { updateProfile } from '../api/users'
import { AuthContext } from '../context/auth'

export default function ProfileForm () {
  const { user, setUser } = useContext(AuthContext)
  const [selectedFile, setSelectedFile] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [checked, setChecked] = useState(false)

  const [form, setForm] = useState({
    id: null,
    picture: '',
    address: '',
    phone: ''
  })

  useEffect(() => {
    setForm(user)
  }, [])

  function onChange (e) {
    const val = e.target.value
    const attr = e.target.name
    console.log(val)
    setForm({ ...form, [attr]: val })
  }

  function onChangeFile (e) {
    setSelectedFile(e.target.files[0])
  }

  async function onSubmit (e) {
    e.preventDefault()
    setIsLoading(true)
    try {
      const form_data = new FormData()
      if (selectedFile.name)
        form_data.append('picture', selectedFile, selectedFile.name)
      if (checked) form_data.append('clearAvatar', checked)
      form_data.append('email', user.email)
      form_data.append('username', user.username)
      form_data.append('address', form.address)
      form_data.append('phone', form.phone)

      const data = await updateProfile(user.id, form_data, {
        'Content-Type': 'multipart/form-data'
      })
      setUser(data)
      setSelectedFile({})
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className='box' onSubmit={onSubmit}>
      <h3>Profile</h3>

      <div className='field is-horizontal'>
        <div className='field-label'>
          <label className='label'>Avatar</label>
        </div>
        <div className='field-body'>
          <div className='field file has-name'>
            <label className='file-label'>
              <input
                className='file-input'
                type='file'
                name='resume'
                onChange={onChangeFile}
              />
              <span className='file-cta'>
                <span className='file-icon'>
                  <i className='fas fa-upload'></i>
                </span>
                <span className='file-label'>Change avatar</span>
              </span>

              {selectedFile.name && (
                <span className='file-name'>{selectedFile.name}</span>
              )}
            </label>
          </div>
          {user.picture && (
            <p className='help'>
              <a target='_blank' href={user.picture}>
                Current
              </a>
            </p>
          )}
        </div>
      </div>

      <div class='field is-horizontal'>
        <div className='field-label'></div>
        <div className='field-body'>
          <div className='field'>
            <div class='control'>
              <label class='checkbox'>
                <input
                  type='checkbox'
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />{' '}
                &nbsp;Clear avatar
              </label>
            </div>
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
