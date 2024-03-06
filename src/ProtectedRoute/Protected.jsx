/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    if (localStorage.getItem('account') !== null) {
        const { user } = JSON.parse(localStorage.getItem('account'));
        if (user && user.id !== 1) {
            return <Navigate to='/' />
        }
        else {
            return children ? children : <Outlet />
        }
    }
    else {
        return <Navigate to='*' />
    }


}

export default ProtectedRoute