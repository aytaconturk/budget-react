import React from 'react';
import { Navigate } from 'react-router-dom';
import { history } from './history';


export { PrivateRoute };

function PrivateRoute({ children }) {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!user) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/giris" state={{ from: history.location }}/>
    }

    // authorized so return child components
    return children;
}