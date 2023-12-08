import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const googleLogin= () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            const userEmail = currentUser?.email || user?.email
            const loggedUser = {email: userEmail}
            if (currentUser) {
                axios.post('https://assignment11-server-ochre.vercel.app/jwt',loggedUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                })
            }
            else{
                axios.post('https://assignment11-server-ochre.vercel.app/logout',loggedUser,{
                    withCredentials: true
                })
                .then(res => {
                    console.log(res.data);
                })
            }
        })
        return () => unsubscribe()
    },[])

    const AuthInfo = {
        logInUser,
        createUser,
        googleLogin,
        user,
        loading,
        logOut
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;