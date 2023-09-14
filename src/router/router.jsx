import { createBrowserRouter } from "react-router-dom"
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Cities from "../pages/Cities";
import CityDetails from "../pages/CityDetails"
import SignIn from "../pages/SignIn";
import SignUp from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cities',
                element: <Cities />
                
            },
            {
                path: '/cities/:id',
                element: <CityDetails />
            },
            {
                path: '/singin',
                element: (<ProtectedRoute path='/'>
                    <SignIn />
                </ProtectedRoute>)
            },
            {
                path: '/singup',
                element: <SignUp />
            },
            {
                path: '*',
                element: <h1 className="text-3xl">ERROR</h1>
            },
            {
                path: '/404',
                element: <h1 className="text-3xl">ERROR 404</h1>
            },
        ]
    }
]);

export default router;