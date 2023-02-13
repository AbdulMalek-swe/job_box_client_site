import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/reausable/Loading";
const PrivateRoute = ({children}) => {
    const { pathname } = useLocation();
   
  const {email,isLoading} = useSelector(state=>state.auth)
const location = useLocation();
 
if(isLoading){
  return <Loading/>
}
if(!email){
  return <Navigate to="/user/login" state={{from:location}}/>
}

  return children;
};

export default PrivateRoute;