import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
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
    
    const signupWithEmailAndPassword = (name ,email, password, history) => {

        setisLoading(true);

        createUserWithEmailAndPassword(auth, email, password)

        .then((result) => {
           console.log(result.user)
            const newUser = {email, displayName: name};
            setUser(newUser);
           
            saveUserToDb(name, email, "POST")
            
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
            
              }).catch((error) => {
                
              });

              history.replace('/home')
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

    // log in with google 

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


    // save user to database

    const saveUserToDb = (displayName, email, method) => {
        const user = {displayName, email}
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {"content-type": "application/json"},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }


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
        error,
        isLoading,
        signupWithEmailAndPassword,
        loginWithEmailAndPassword,
        loginWithGoogle,
        logout
    };
};

export default useFirebase;