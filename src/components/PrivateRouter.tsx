import { Navigate, Outlet } from 'react-router-dom'
import { useToast } from './ui/use-toast'
import { ToastAction } from '@radix-ui/react-toast'

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
    // if (user.id_user != privateId) {
    //     toast({
    //         variant: "destructive",
    //         description: `Session ended!You have to re login`,
    //         action: <ToastAction altText="Try again">Try again</ToastAction>
    //       });
    //     localStorage.clear()
    //     return <Navigate to={redirectPath} replace />
    // }
    return children ? children : <Outlet />
}

export default PrivateRoute