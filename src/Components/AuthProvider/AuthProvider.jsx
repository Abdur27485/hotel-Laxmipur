import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const Auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [modalShow, setModalShow] = useState(false);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    const logOut = () => {
        return signOut(Auth);
    }
    const data = {
        Auth,
        createUser,
        setUser,
        logOut,
        user,
        loading,
        setLoading,
        setModalShow,
        modalShow,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            // setLoading(false)
        })


        // stop observing while unmounting
        return () => {
            return unsubscribe
        }
    }, [])

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;