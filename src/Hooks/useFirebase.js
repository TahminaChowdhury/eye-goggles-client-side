import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initAuth from '../Firebase/firebase.init';

initAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  // auth
  const auth = getAuth();

  // providers
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  // signin with email and password

  const signupWithEmailAndPassword = (
    name,
    email,
    password,
    navigate,
    location
  ) => {
    setisLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const newUser = { email, displayName: name };
        setUser(newUser);

        saveUserToDb(name, email, 'POST');

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        const { from } = location.state || { from: { pathname: '/' } };

        navigate(from);

        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setisLoading(false));
  };

  // sign in with email and password

  const loginWithEmailAndPassword = (email, password, location, navigate) => {
    setisLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);

        const { from } = location.state || { from: { pathname: '/' } };

        navigate(from);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setisLoading(false));
  };

  // log in with google

  const loginWithGoogle = (location, navigate) => {
    setisLoading(true);

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);

        saveUserToDb(user.displayName, user.email, 'PUT');

        const { from } = location.state || { from: { pathname: '/' } };

        navigate(from, { replace: true });
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setisLoading(false));
  };

  // login with facebook

  const loginWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;

        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.email;

        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };

  // save user to database

  const saveUserToDb = (displayName, email, method) => {
    const user = { displayName, email };
    fetch('http://localhost:5000/users', {
      method: method,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin))
      .catch((error) => {});
  }, [user.email]);

  // logout

  const logout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

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
  }, []);

  return {
    user,
    error,
    isLoading,
    admin,
    signupWithEmailAndPassword,
    loginWithEmailAndPassword,
    loginWithGoogle,
    loginWithFacebook,
    logout,
  };
};

export default useFirebase;
