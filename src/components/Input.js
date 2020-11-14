export default function Input ({
  type = 'text',
  name,
  autocomplete,
  placeholder,
  required = true,
  ...props
}) {
  return (
    <div className='field'>
      <div className='control'>
        <input
          className='input is-rounded'
          onChange={props.onChange}
          name={name}
          autoComplete={autocomplete}
          type={type}
          required={required}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}
