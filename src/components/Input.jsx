import { useState } from 'react'

export default function Input ({
  type = 'text',
  name,
  autocomplete,
  placeholder,
  value,
  required,
  icon,
  isPassword,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false)

  function togglePassword () {
    setShowPassword(!showPassword)
  }

  return (
    <div className='field'>
      <div
        className={`control ${icon ? 'has-icons-left' : ''} has-icons-right`}
      >
        <input
          className='input is-rounded'
          onChange={props.onChange}
          name={name}
          autoComplete={autocomplete}
          value={value}
          type={isPassword && showPassword ? 'text' : type}
          required={!!required}
          placeholder={placeholder}
        />
        {icon && (
          <span className='icon is-small is-left'>
            <i className='material-icons'>{icon}</i>
          </span>
        )}
        {isPassword && (
          <span
            className='icon is-small is-right is-clickable'
            onClick={togglePassword}
          >
            <i className='material-icons'>
              {showPassword ? 'visibility' : 'visibility_off'}
            </i>
          </span>
        )}
      </div>
    </div>
  )
}
