import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { AuthContext } from './AuthContext';


const Authprovider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading, setLoading] = useState(true);
    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo={
        user,setUser,setLoading,loading,signUp
    }
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
    return (
        <div>
            <AuthContext value={authInfo}>{children}</AuthContext>
        </div>
    );
};

export default Authprovider;