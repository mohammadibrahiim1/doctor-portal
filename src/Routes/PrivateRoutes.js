import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { pathname } = useLocation();
  const { isLoading, email } = useSelector((state) => state.auth);

  if (isLoading) {
    return <span> Loading...</span>;
  }

  if (!isLoading && !email) {
    return <Navigate to={"/login"} state={{ path: pathname }}></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
