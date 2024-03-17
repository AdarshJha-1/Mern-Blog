import {useSelector} from 'react-redux'
import {Outlet, Navigate} from 'react-router-dom'

const PrivateRoute = () => {
    const {createUser} = useSelector(state => state.user)
  return createUser ? <Outlet/> : <Navigate to='/sign-in'/>
}

export default PrivateRoute