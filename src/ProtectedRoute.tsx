import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/authContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>Vous devez être connecté pour accéder à cette page.</p>
        <Navigate to="/login" />
      </div>
    );
  }

  return <>{children}</>;
}
