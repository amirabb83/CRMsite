import { Navigate, useRoutes } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Home from './pages/home/home';
import Login from './pages/login/login';

export const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const routes = useRoutes([
    {
      path: "/",
      element: isAuthenticated ? <Home /> : <Navigate to="/login" />,
    },
    { path: "/login", element: <Login /> },
    { path: "*", element: <Navigate to={isAuthenticated ? "/" : "/login"} /> },
  ]);

  return routes;
};