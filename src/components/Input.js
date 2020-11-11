export default function Input ({
  type = 'text',
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
          autoComplete={autocomplete}
          type={type}
          required={required}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}
