// AuthContext.tsx
"use cleint";
import React from "react";
import { createContext, useContext, ReactNode, useState } from "react";

interface AuthContextProps {
  children: ReactNode;
}

interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Implementa la lógica de autenticación aquí
    // Por ejemplo, verifica si el usuario es un administrador
    // y actualiza el estado de autenticación en consecuencia.
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Implementa la lógica de cierre de sesión aquí
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
