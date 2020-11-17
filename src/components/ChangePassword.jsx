import { useContext, useState } from 'react'
import { changePassword } from '../api/users'
import { AuthContext } from '../context/auth'
import Input from './Input'

export default function ProfileForm () {
  const [isLoading, setIsLoading] = useState(false)
  const defaultForm = {
    old_password: '',
    password: '',
    password_confirm: ''
  }
  const [form, setForm] = useState(defaultForm)

  function onChange (e) {
    const val = e.target.value
    const attr = e.target.name
    setForm({ ...form, [attr]: val })
  }

  async function onSubmit (e) {
    e.preventDefault()
    setIsLoading(true)
    try {
      await changePassword(form)
      setForm(defaultForm)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className='box' onSubmit={onSubmit}>
      <h3>Change password</h3>
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Current</label>
        </div>
        <div className='field-body'>
          <Input
            className='input'
            type='password'
            icon='lock'
            isPassword
            placeholder='Current'
            name='old_password'
            onChange={onChange}
            value={form.old_password}
          />
        </div>
      </div>
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Password</label>
        </div>
        <div className='field-body'>
          <Input
            className='input'
            type='password'
            icon='lock'
            isPassword
            placeholder='Password'
            name='password'
            onChange={onChange}
            value={form.password}
          />
        </div>
      </div>
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Confirm</label>
        </div>
        <div className='field-body'>
          <Input
            className='input'
            type='password'
            icon='lock'
            isPassword
            placeholder='Confirm password'
            name='password_confirm'
            onChange={onChange}
            value={form.password_confirm}
          />
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
