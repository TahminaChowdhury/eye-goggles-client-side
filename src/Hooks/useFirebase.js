import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from '../Firebase/firebase.init'

initAuth();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setisLoading] = useState(true);

    // auth
    const auth = getAuth();

    // providers
    const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = (location , history) => {
        
        setisLoading(true);

        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setUser(user);
            const { from } = location.state || { from: { pathname: "/" } };
            history.replace(from);
            setError("")

        }).catch((error) => {

            setError(error.message);

        }).finally(() => setisLoading(false));
    };


    // logout

    const logout = () => {
        signOut(auth).then(() => {
            
          }).catch((error) => {
            
          });
    }
    // observer

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
              setUser({});
            }
          });
    },[])

    return{
        user,
        loginWithGoogle,
        logout
    };
};

export default useFirebase;