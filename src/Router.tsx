import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Auth, Home } from './pages'

const Router: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/home' element={<Home />} />
      <Route path='*' element={<Navigate to='/home' />} />
    </Routes>
  )
}

export default Router
