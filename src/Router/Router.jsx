import { createBrowserRouter } from "react-router-dom";
import Root from "../Mainlayout/Root";
import Errorpage from "../Pages/Errorpage";
import Home from "../Pages/Home/Home";
import Contactus from "../Components/Contactus";
import Ourshop from "../Components/Ourshop";
import Ourmenu from "../Components/Ourmenu";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Mainlayout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/contact",
                element:<Contactus></Contactus>,
            },
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>,
            },
            {
                path:"/ourmenu",
                element:<Ourmenu></Ourmenu>,
            },
            {
                path:"/ourshop",
                element:<Ourshop></Ourshop>,
            },
        ],
        
    },
    {path:'/login', element:<SignIn></SignIn>},
    {path:'/signup', element:<SignUp></SignUp>},
    {
        path:'dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
               path:'cart' ,
               element:<Cart></Cart>,
            },
        ]
    }
])
export default router;