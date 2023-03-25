import { FC } from 'react'
import { Password, Text } from '../../app/shared/components'
import { IAuthForm, useAuthForm } from '../../app/screens/auth/hooks'
import styles from './index.module.scss'

const Auth: FC = () => {
  const { register, errors, handleSubmit, reset } = useAuthForm()

  const onAuthFormSubmitHandler = (data: IAuthForm) => {
    console.log(data)
    // todo: finally make requests to api
    reset()
  }

  return (
    <div className={styles.page_wrapper}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onAuthFormSubmitHandler)}>
        <h1 className={styles.form_title}>Authorization</h1>
        <div className={styles.form_content}>
          <Text
            name='username'
            label='Username'
            register={register('username')}
            errors={errors.username}
          />
          <Password
            name='password'
            label='Password'
            register={register('password')}
            errors={errors.password}
          />
        </div>
        <div className={styles.form_bottom}>
          <button type='submit' className='button primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Auth
