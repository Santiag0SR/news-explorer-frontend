import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, onSignInClick, ...props }) => {
  const jwt = localStorage.getItem("jwt");
  if (!jwt) {
    onSignInClick();
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
