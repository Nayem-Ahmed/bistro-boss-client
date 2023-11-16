import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

 

export const AuthContext = createContext(null)

const Authproviders = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser =(email,password)=>{
        setUser(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const loginUser =(email,password)=>{
        setUser(true)
        return signInWithEmailAndPassword(auth,email,password)

    }
    const logOut =()=>{
        setUser(true)
        return signOut(auth)

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentuser=>{
            setUser(currentuser)
            console.log('currentUser',currentuser);
            setLoading(false)
        });
        return()=>{
            return unsubscribe();
        }
    },[])

    const authInfo = {user,loading,createUser,loginUser,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authproviders;