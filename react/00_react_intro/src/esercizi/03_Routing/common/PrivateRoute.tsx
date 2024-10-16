import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  redirectTo: string;
  element: React.ReactNode; // può essere un componente o un JSX
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { redirectTo, element } = props;
  return localStorage.getItem('isLogged')
            ? <div>{element}</div>
            : <Navigate to={redirectTo} />
}

export default PrivateRoute
