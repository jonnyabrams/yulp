import { Link } from 'react-router-dom'

import UpdateRestaurant from '../../components/UpdateRestaurant/UpdateRestaurant'
import './update-page.css'

const UpdatePage = () => {
  return (
    <div className="update-page">
      <h1 className='header'>Update Restaurant</h1>
      <UpdateRestaurant />
      <Link to='/' style={{ textDecoration: "none" }}><span className='return-link'>Return to home page</span></Link>
    </div>
  )
}

export default UpdatePage