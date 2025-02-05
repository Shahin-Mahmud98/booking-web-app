import { Navigate, Outlet } from "react-router-dom"


const adminRoute = ({children}) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/admin">
        
        </Navigate>
    }
  return (
    children ? children : <Outlet/>
  )
}

export default adminRoute
