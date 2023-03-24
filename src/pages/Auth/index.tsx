import { FC } from 'react'
import { Link } from 'react-router-dom'

const Auth: FC = () => {
  return (
    <div>
      Auth page
      <Link to='/home'>To home page</Link>
    </div>
  )
}

export default Auth
