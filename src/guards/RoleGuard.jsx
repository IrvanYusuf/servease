import { useAuth } from "@/context/authContext";
import { Navigate, Outlet } from "react-router-dom";

const RoleGuard = ({ allowedRoles = [] }) => {
  const { decodedToken } = useAuth();
  return allowedRoles.includes(decodedToken.role) ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
};

export default RoleGuard;
