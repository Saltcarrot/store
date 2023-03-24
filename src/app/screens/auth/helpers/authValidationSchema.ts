import { object, string } from 'yup'

export const authValidationSchema = object({
  username: string().required('Required field'),
  password: string().required('Required field'),
})
