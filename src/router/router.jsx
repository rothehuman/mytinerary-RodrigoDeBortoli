import { createBrowserRouter } from "react-router-dom"
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Cities from "../pages/Cities";
import CityDetails from "../pages/CityDetails"
import SingIn from "../pages/Singin";

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
                element: <SingIn/>
            }
        ]
    }
]);

export default router;