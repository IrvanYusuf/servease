import { useAuth } from "@/context/authContext";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
  const { token } = useAuth();
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AuthGuard;
