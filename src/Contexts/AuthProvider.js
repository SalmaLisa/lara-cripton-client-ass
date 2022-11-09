import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)
  const auth = getAuth(app)

  //create user

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }
  //update user name
  const updateUsername = (name) => { 
    return updateProfile(auth.currentUser, {
     displayName: name
    })
  }

  //login 
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  //google Sign In
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }

  //logout
  const logout = () => {
    return signOut(auth)
  }

  //user monitor
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser===null||currentUser)
      setLoading(false)
    })
    return () => {
      unSubscribe()
    }
  },[auth])

  const authInfo = {
    user,
    loading,
    createUser,
    updateUsername,
    login,
    googleSignIn,
    logout
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;