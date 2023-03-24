import { FC, memo } from 'react'
import { IProps } from './index.props'

const Input: FC<IProps> = ({
  name,
  label,
  placeholder = '',
  register,
  errors,
}) => {
  return (
    <div className='input_control'>
      <div className='input_wrapper'>
        <label htmlFor={name} className='input_label'>
          {label}
        </label>
        <input
          id={name}
          type='text'
          className={`input_field ${errors ? 'invalid' : ''}`}
          placeholder={placeholder}
          {...register}
        />
      </div>
      {errors && <span className='input_error'>{errors.message}</span>}
    </div>
  )
}

export default memo(Input)
