import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

export interface IProps {
  name: string
  label: string
  placeholder?: string
  register: UseFormRegisterReturn<string>
  errors: FieldError | undefined
}
