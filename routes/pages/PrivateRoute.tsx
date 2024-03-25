// import { useSelector } from "react-redux";
import { Navigate, RouteProps } from "react-router-dom";
// import { RootState } from "redux/reducers";

const PrivateRoute = ({ children }: RouteProps) => {
  const token = false;
  // const token = useSelector(
  //   (state: RootState) => state?.userProfile?.token ?? ""
  // );
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};
export default PrivateRoute;
