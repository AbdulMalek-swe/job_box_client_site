import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router";

import routes from "./routes/routes";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setUser, toggleLoading } from "./features/auth/authSlice";
import { Toaster } from "react-hot-toast";
import jwt_decode from "jwt-decode";
function App() {
  const token = localStorage.getItem("token");
  const auth = getAuth();
  const dispatch = useDispatch()
  const state = useSelector(state => state.auth)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email;
        dispatch(setUser(email))
      } else {
        dispatch(toggleLoading())
      }
    });
  }, [])
  var email;
  if(token){
     email = jwt_decode(token);
  }


  useEffect(() => {

    if (true) {
      dispatch(setUser(email?.email))
    }
    else {
      dispatch(toggleLoading())
    }
  }, [])
  return (
    <div>
      <Toaster />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
