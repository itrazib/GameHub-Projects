import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import GameDetails from "./pages/GameDetails";
import MyProfile from "./pages/MyProfile";
import UpdateInfo from "./pages/UpdateInfo";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import NotFound from "./pages/NotFound";

import Layout from "./layouts/Layout";
import { AuthProvider } from "./firebase/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { createBrowserRouter, RouterProvider } from 'react-router';

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      {
        path: "game/:id",
        element: (
          <ProtectedRoute>
            <GameDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "my-profile",
        element: (
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "update-info",
        element: (
          <ProtectedRoute>
            <UpdateInfo />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </StrictMode>,
)
