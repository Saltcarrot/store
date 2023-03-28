import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IAuthForm, useAuthForm } from '../../app/screens/auth/hooks'
import { useSignInMutation } from '../../app/store/auth'
import { useTypedSelector } from '../../app/shared/hooks'
import { Password, Text } from '../../app/shared/components'
import styles from './index.module.scss'

const Auth: FC = () => {
	const { register, errors, handleSubmit, reset } = useAuthForm()

	const [signIn, { isLoading, isSuccess }] = useSignInMutation()
	const { user } = useTypedSelector(state => state.auth)

	const navigate = useNavigate()

	useEffect(() => {
		if (!isLoading && isSuccess && user.token !== '') {
			reset()
			navigate('/home')
		}
	}, [isLoading, isSuccess])

	const onAuthFormSubmitHandler = (data: IAuthForm) => {
		signIn(data)
	}

	return (
		<div className={styles.page_wrapper}>
			<form
				className={styles.form}
				onSubmit={handleSubmit(onAuthFormSubmitHandler)}
			>
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
