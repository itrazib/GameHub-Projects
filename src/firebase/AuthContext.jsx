import React, { createContext,  useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { auth } from './firebase.config';



const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true);

  function loginWithEmail(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function registerWithEmail(name, email, password, photoURL) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) => updateProfile(res.user, { displayName: name, photoURL }));
  }

  function loginWithGoogle() {
    return signInWithPopup(auth, googleProvider);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateUserProfile(data) {
    if (!auth.currentUser) return Promise.reject(new Error('No authenticated user'));
    return updateProfile(auth.currentUser, data).then(() => setUser({ ...auth.currentUser }));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    loading,
    loginWithEmail,
    registerWithEmail,
    loginWithGoogle,
    logout,
    resetPassword,
    updateUserProfile,
    error,
    setError
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <div className="p-6">Loading...</div> : children}
    </AuthContext.Provider>
  );
}
