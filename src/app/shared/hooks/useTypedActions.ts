import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { authActions } from '../../store/auth'

const allActions = {
	...authActions
}

export const useTypedActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(allActions, dispatch)
}
