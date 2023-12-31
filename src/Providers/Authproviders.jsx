import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";



export const AuthContext = createContext(null)

const Authproviders = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const axiosPublic = useAxiosPublic()

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const loginUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }
    const logingoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)       
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentuser=>{
            setUser(currentuser)

            // jwt
            if (currentuser) {
                const userInf = {email: currentuser?.email}
                axiosPublic.post('/jwt',userInf)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access token',res.data.token)

                    }                  
                })
                
            }else{
                localStorage.removeItem('access token')

            }
            console.log('currentUser',currentuser);
            setLoading(false)
        });
        return()=>{
            return unsubscribe();
        }
    },[])

    const authInfo = {user,loading,createUser,loginUser,logOut,logingoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authproviders;