import { useEffect } from "react";
import {   useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router";
 
import routes from "./routes/routes";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {   setUser, toggleLoading} from "./features/auth/authSlice";

function App() {
  const token = localStorage.getItem("token");
  const auth = getAuth();
  const dispatch = useDispatch()
  const state = useSelector(state=>state.auth)
  console.log(state);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email ;
         
         dispatch(setUser(email))
      } else {
         dispatch(toggleLoading())
      }
    });
  }, [])
  useEffect(() => {
    // dispatch(toggleLoading())
    
      fetch('http://localhost:5000/me',{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res=>res.json())
      .then(data=>{
       
        const {email} = data.user;
        dispatch(setUser(email))
      })
        
  }, [token])
  return (
    <div>
        <RouterProvider router={routes} />
    </div>
  );
}

export default App;
