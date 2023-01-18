import { useEffect } from "react";
import {   useDispatch } from "react-redux";
import { RouterProvider } from "react-router";
 
import routes from "./routes/routes";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setUser } from "./features/auth/authSlice";

function App() {
  const auth = getAuth();
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email ;
         dispatch(setUser(email))
      } else {

      }
    });
  }, [])
  return (
    <div>
        <RouterProvider router={routes} />
    </div>
  );
}

export default App;
