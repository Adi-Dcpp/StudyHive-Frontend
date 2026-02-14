import { createContext, useEffect, useState } from "react";
import {
  loginUser,
  logoutUser,
  getCurrentUser,
  registerUser,
} from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user on app start
  useEffect(() => {
    const loadUser = async () => {
      try {
        const { data } = await getCurrentUser();
        setUser(data.data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (credentials) => {
    await loginUser(credentials);
    const { data } = await getCurrentUser();
    setUser(data.data);
  };

  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  const signUp = async (data) => {
    const response = await registerUser(data);
    return response;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        logout,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};