import React from "react";
// import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
// import Loading from "../components/reausable/Loading";
const PrivateRoute = ({children}) => {
    const { pathname } = useLocation();
   
  // const {email,isLoading} = useSelector(state=>state.auth)
  //  console.log(isLoading)
 
  // if (isLoading) {
  //   return <Loading />;
  // }

  // if (!isLoading && !email) {
  //   return <Navigate to='/user/login' state={{ path: pathname }} />;
  // }

  return children;
};

export default PrivateRoute;