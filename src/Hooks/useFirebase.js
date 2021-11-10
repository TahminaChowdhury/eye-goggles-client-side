import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
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



    // signin with email and password
    
    const signupWithEmailAndPassword = (email, password) => {
        setisLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);
            setError('');
        })
        .catch((error) => {
            setError(error.message);
        }).finally(() => setisLoading(false));
    };

    // sign in with email and password
    const loginWithEmailAndPassword = (email, password) => {
        setisLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);
            setError('');
        })
        .catch((error) => {
            setError(error.message);
        }).finally(() => setisLoading(false));
    }

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
            setisLoading(false);
          });
    },[])

    return{
        user,
        isLoading,
        signupWithEmailAndPassword,
        loginWithEmailAndPassword,
        loginWithGoogle,
        logout
    };
};

export default useFirebase;