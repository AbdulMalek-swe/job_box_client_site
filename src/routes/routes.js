import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import SignIn from "../pages/userForms/SignIn";
import SignUp from "../pages/userForms/SignUp";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children:[
            {
                path:"user/login",
                element:<SignIn/>
            }, {
                path:"user/signUp",
                element:<SignUp/>
            }
        ]
    } 
])
export default routes;