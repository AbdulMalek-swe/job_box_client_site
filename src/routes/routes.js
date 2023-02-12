import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/Home/Home";
import AccountCreator from "../pages/register/AccountCreator";
import SignIn from "../pages/userForms/SignIn";
import SignUp from "../pages/userForms/SignUp";
import PrivateRoute from "../utils/PrivateRoute";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path:"/",
                element:<Home/>
            },
            {
                path: "user/login",
                element: <SignIn />
            }, {
                path: "user/signUp",
                element: <SignUp />
            }
        ]
    },
    {
        path: "/register",
        element: <PrivateRoute>
            <AccountCreator />
        </PrivateRoute>
    },
    {
        path: "/register/:type",
        element: <PrivateRoute><AccountCreator /></PrivateRoute>
    }
])
export default routes;