import React, { useEffect, useState } from 'react';
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
import { auth } from '../firebase/firebase.config';
import { AuthContext } from './AuthContext';



const googleProvider = new GoogleAuthProvider();
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

  const authValue = {
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
    <AuthContext value={authValue}>
      {loading ? <div className="min-h-screen text-3xl font-bold flex items-center justify-center">Loading...</div> : children}
    </AuthContext>
  );
}
