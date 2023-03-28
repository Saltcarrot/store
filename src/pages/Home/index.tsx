import { FC } from 'react'
import { useTypedActions } from '../../app/shared/hooks'

const Home: FC = () => {
	const { signOut } = useTypedActions()

	return (
		<div>
			Home page
			<button onClick={() => signOut()}>sign out</button>
		</div>
	)
}

export default Home
