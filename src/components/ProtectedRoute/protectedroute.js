import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedin, children, ...props }) => {
  return isLoggedin ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
