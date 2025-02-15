import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"

const PrivateRoute = ({children}) => {
    const {currentUser,loading}=useAuth() || {};
    if (loading) {
        return <div>Loading...</div>
    }
    if (currentUser) {
        return children;
    }

  return currentUser? children: <Navigate to="/login" replace />
}

export default PrivateRoute
