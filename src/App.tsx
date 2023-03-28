import { FC, StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Router from './Router'
import { store } from './app/store'

const App: FC = () => {
	return (
		<StrictMode>
			<Provider store={store}>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</Provider>
		</StrictMode>
	)
}

export default App
