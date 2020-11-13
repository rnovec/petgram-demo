export default function ProfileForm () {
  return (
    <div>
      <h3>Basic Info</h3>
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Account</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <p className='control is-expanded has-icons-left'>
              <input className='input' type='text' placeholder='Username' />
              <span className='icon is-small is-left'>
                <i className='fas fa-user'></i>
              </span>
            </p>
          </div>
          <div className='field'>
            <p className='control is-expanded has-icons-left has-icons-right'>
              <input
                className='input is-success'
                type='email'
                placeholder='Email'
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-envelope'></i>
              </span>
              <span className='icon is-small is-right'>
                <i className='fas fa-check'></i>
              </span>
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
              <input className='input' type='text' placeholder='First name' />
            </p>
          </div>
          <div className='field'>
            <p className='control is-expanded'>
              <input
                className='input is-success'
                type='text'
                placeholder='Lastname'
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
              <button className='button is-primary'>Save changes</button>
            </div>
          </div>
        </div>
      </div>
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
                className='input is-danger'
                type='text'
                placeholder='Address'
              />
            </div>
            <p className='help is-danger'>This field is required</p>
          </div>
        </div>
      </div>

      <div class='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Phone</label>
        </div>
        <div class='field-body'>
          <div class='field is-expanded'>
            <div class='field has-addons'>
              <p class='control'>
                <a class='button is-static'>+52</a>
              </p>
              <p class='control is-expanded'>
                <input
                  class='input'
                  type='tel'
                  placeholder='Your phone number'
                />
              </p>
            </div>
            <p class='help'>Do not enter the first zero</p>
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
    </div>
  )
}
