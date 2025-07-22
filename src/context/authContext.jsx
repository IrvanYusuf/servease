import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

/**
 * @typedef {Object} AuthContextType
 * @property {string|null} token
 * @property {function(string): void} setAuthToken
 * @property {string|null} idMitra
 * @property {function(string): void} setAuthIdMitra
 * @property {any|null} decodedToken
 * @property {function(): void} logOut
 */

/** @type {import('react').Context<AuthContextType|null>} */
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || undefined
  );
  const [idMitra, setIdMitra] = useState(() => localStorage.getItem("idMitra"));

  const setAuthToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const setAuthIdMitra = (newIdMitra) => {
    setIdMitra(newIdMitra);
    localStorage.setItem("idMitra", newIdMitra);
  };

  const logOut = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const isValidToken = token && token.split(".").length === 3;
  const decodedToken = isValidToken ? jwtDecode(token) : null;

  return (
    <AuthContext.Provider
      value={{
        token,
        setAuthToken,
        idMitra,
        setAuthIdMitra,
        decodedToken,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
