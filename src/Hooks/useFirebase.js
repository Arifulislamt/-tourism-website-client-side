import { getAuth, signInWithPopup,signOut,onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Authentication/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //google login function
    const singInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)
        
    }
    //logOut function
    const logOut = () => {
        signOut(auth)
        .then(result => {
            setUser({})
        })
    }

    //Observe user state change
    useEffect(()=> {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
        })
        return () => unsubscribed;
    },[])


    return{
        user,
        logOut,
        singInUsingGoogle
        
    }

}
export default useFirebase;