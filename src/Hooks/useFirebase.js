import { getAuth, signInWithPopup,signOut,onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Authentication/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //google login function
    const singInUsingGoogle = () => {
        setIsLoading(true);
       return signInWithPopup(auth, googleProvider)
       
       .finally(()=> setIsLoading(false));
    }
    //logOut function
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(result => {
            setUser({})
        })
        .finally(()=> setIsLoading(false));
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
            setIsLoading(false);
        })
        return () => unsubscribed;
    },[])


    return{
        user,
        logOut,
        isLoading,
        singInUsingGoogle
        
    }

}
export default useFirebase;