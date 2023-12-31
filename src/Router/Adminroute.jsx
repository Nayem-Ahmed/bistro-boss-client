import { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../Providers/Authproviders";
import { Navigate, useLocation } from "react-router-dom";

 
const Adminroute = ({children}) => {
    const [user,loading] = useContext(AuthContext)
    const [isAdmin, isPending] = useAdmin();
    const location = useLocation();

    if (loading || isPending) {
        return <span className="loading loading-spinner text-success"></span>
    }
    if (user && isAdmin) {
        return children;
        
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
    
};

export default Adminroute;