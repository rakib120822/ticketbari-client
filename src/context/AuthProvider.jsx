import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const updateProfileInfo = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  const authInfo = {
    registerUser,
    logIn,
    user,
    setUser,
    loading,
    setLoading,
    updateProfileInfo,
    logOut,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup
    return () => unsubscribe();
  }, [user]); // empty dependency, run once

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
