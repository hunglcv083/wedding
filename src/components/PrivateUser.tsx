import { Navigate, Outlet, useParams } from 'react-router-dom'

type PrivateUserProps = {
    children?: React.ReactNode
}

const PrivateUser = ({children}: PrivateUserProps) => {
    const {id} = useParams()
    const user = JSON.parse(localStorage.getItem('user')||"{}")
    if (user.id_user != id) {
        return <Navigate to={`/profile/${id}`} replace />
    }
    return children ? children : <Outlet />
}

export default PrivateUser