import { createBrowserRouter } from "react-router-dom";
import Root from "../Mainlayout/Root";
import Errorpage from "../Pages/Errorpage";
import Home from "../Pages/Home/Home";
import Contactus from "../Components/Contactus";
import Dashboard from "../Components/Dashboard";
import Ourmenu from "../Components/Ourmenu";
import Ourshop from "../Components/Ourshop";

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
        ]
    },
])
export default router;