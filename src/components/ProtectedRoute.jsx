import React, { useContext } from 'react';
import { AuthContext} from '../firebase/AuthContext';
import { Navigate } from 'react-router';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <div className="p-6">Checking authentication...</div>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}
