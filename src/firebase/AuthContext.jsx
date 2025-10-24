import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
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
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <div className="p-6">Loading...</div> : children}
    </AuthContext.Provider>
  );
}
