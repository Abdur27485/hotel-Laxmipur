import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {modalShow, setModalShow , user} = useContext(AuthContext);
    if(user){
        return children
    }
    setModalShow(true)
    return <Navigate to='/'></Navigate>
};

export default PrivateRoute;