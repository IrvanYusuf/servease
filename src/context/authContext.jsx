import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [idMitra, setIdMitra] = useState(() => localStorage.getItem("idMitra"));

  const setAuthToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const setAuthIdMitra = (newIdMitra) => {
    setIdMitra(newIdMitra);
    localStorage.setItem("idMitra", newIdMitra);
  };

  return (
    <AuthContext.Provider
      value={{ token, setAuthToken, idMitra, setAuthIdMitra }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
