import { createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut  } from "firebase/auth";
import { createContext,useContext,useState } from "react";
import { auth } from "../firebase/firebase.config";
import { useEffect } from "react";

const AuthContext=createContext();
export const useAuth=()=>{
    return useContext(AuthContext)
}

const provider = new GoogleAuthProvider();

export const AuthProvide=({children})=>{
        const [currentUser,setCurrentUser]=useState(null);
        const [loading,setLoading]=useState(true);


        const registerUser=async(email,password)=>{
            return await createUserWithEmailAndPassword(auth,email,password)
        }

        const loginUser=async(email,password)=>{
            return await signInWithEmailAndPassword(auth,email,password)
        }

        const signInGoogle=async()=>{
            return await signInWithPopup(auth,provider)
        }

        const userLogOut=async()=>{
            return await signOut(auth);
        }

        useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);

            if(user) {
               
                const {email, displayName, photoURL} = user;
                const userData = {
                    email, username: displayName, photo: photoURL
                } 
            }
        })

        return () => unsubscribe();
    }, [])

        const value={
            currentUser,
            registerUser,
            loading,
            loginUser,
            signInGoogle,
            userLogOut
        }

        return(
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider> 
        )
}