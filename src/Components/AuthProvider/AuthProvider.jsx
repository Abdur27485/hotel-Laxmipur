import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const Auth = getAuth(app);

const AuthProvider = ({children}) => {
    const data = {
        Auth,
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;