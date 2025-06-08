// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
    setIsLoading(false);

    // If authenticated but on auth page, redirect to home or intended page
    if (!!token && location.pathname === "/auth") {
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
  }, [location, navigate]);

  const login = (token, redirectPath = "/") => {
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
    navigate(redirectPath, { replace: true });
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
