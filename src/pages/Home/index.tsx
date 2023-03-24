import { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => {
  return (
    <div>
      Home page
      <Link to='/auth'>To auth page</Link>
    </div>
  )
}

export default Home
