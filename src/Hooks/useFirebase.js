import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail ,
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

  // sign up with email and password
  const signupWithEmailAndPassword = (
    first_name,
    last_name,
    email,
    password,
    navigate,
    location
  ) => {
    setisLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const name = `${first_name} ${last_name}`;
        saveUserToLocalStorage(user.accessToken);
        saveUserToDb(name, email, 'POST');

        updateProfile(auth.currentUser, {
          displayName: name,
        })
        const { from } = location.state || { from: { pathname: '/' } };

        navigate(from);

        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setisLoading(false));
  };

  // log in with email and password
  const loginWithEmailAndPassword = (email, password, location,navigate) => {
    setisLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        saveUserToLocalStorage(user.accessToken);
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
        saveUserToLocalStorage(user.accessToken);
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
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        saveUserToLocalStorage(accessToken);
      })
      .catch((error) => {});
  };

  // reset password
  const resetPass = (email) => {
    sendPasswordResetEmail(auth, email)
  .then(() => {
  })
  .catch((error) => {

  });
  }
  // save user to local storage
  const saveUserToLocalStorage = (token) => {
    localStorage.setItem('userToken', JSON.stringify(token));
  };

  // save user to database
  const saveUserToDb = (displayName, email, method) => {
    const user = { displayName, email };
    fetch('https://eye-goggles.up.railway.app/users', {
      method: method,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetch(`https://eye-goggles.up.railway.app/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin))
      .catch((error) => {});
  }, [user.email]);

  // logout
  const logout = () => {
    localStorage.removeItem('userToken');
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
    resetPass,
    signupWithEmailAndPassword,
    loginWithEmailAndPassword,
    loginWithGoogle,
    loginWithFacebook,
    logout,
  };
};

export default useFirebase;
