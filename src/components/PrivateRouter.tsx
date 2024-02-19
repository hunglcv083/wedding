import { Navigate, Outlet } from 'react-router-dom'
import { useToast } from './ui/use-toast'
import { ToastAction } from './ui/toast'

type PrivateRouteProps = {
    children?: React.ReactNode
    redirectPath?: string
    privateId?:string
}

const PrivateRoute = ({children, redirectPath = '/signin'}: PrivateRouteProps) => {
    const {toast} = useToast()
    const user = JSON.parse(localStorage.getItem('user')||"{}")
    if (!user || Object.keys(user).length === 0) {
        toast({
            variant: "destructive",
            description: `You have to login in first!`,
            action: <ToastAction altText="Try again">Try again</ToastAction>
          });
        return <Navigate to={redirectPath} replace />
    }
    return children ? children : <Outlet />
}

export default PrivateRoute