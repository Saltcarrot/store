import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { authValidationSchema } from '../helpers'

export interface IAuthForm {
  username: string
  password: string
}

export const useAuthForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IAuthForm>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(authValidationSchema),
  })

  return {
    register,
    errors,
    handleSubmit,
    reset,
  }
}
