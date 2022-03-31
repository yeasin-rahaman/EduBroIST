import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,

} from "firebase/auth";

import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  //State for store user Data
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false)

  // Navbar toggle
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(false);
  };

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


  //REGISTER WITH EMAIL END PASSWORD

  const registerUser = (email, password, name, location, navigate) => {
    // sendUserInfoToDb(email)
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {

        const destination = location?.state?.from || '/'
        navigate(destination)
        setError("");

        const newUser = { email, displayName: name }
        setUser(newUser)
        // save use to database 
        sendUserInfoToDb(email, name, 'POST')
        // send name to firebase after creation 
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => { })
          .catch((error) => { })

      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));

  }

  //lOGIN WITW EMAIL AND PASSWORD COUSTM 
  const loginWithOwnEmailAndPass = (email, password, location, navigate) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/'
        navigate(destination)
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));

  }

  // GOOGLE PROVIDER LOGIN
  const loginWithGoogle = (location, navigate) => {

    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        // save to database 
        sendUserInfoToDb(user.email, user.displayName, 'PUT')
        setError("")
        const destination = location?.state?.from || '/'
        navigate(destination)
      }).catch(error => setError(error.message))
      .finally(() => setIsLoading(false))

  };

  //LOG OUT USER METHOD
  const userLogOut = () => {
    setIsLoading(true)
    setToggle(false)
    signOut(auth)
      .then(() => {

      }).catch((error) => {
        setError(error.message)
      })
      .finally(() => setIsLoading(false));
  }

  // save user to database 
  const sendUserInfoToDb = (email, displayName, method) => {
    const user = { email, displayName }
    fetch('http://localhost:5000/users', {
      method: method,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    }).then(res => res.json())
      .then(data => {
        // console.log(data)
      })
  }


  //OBSERVER USER STATE
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);


  //ADMIN CONDITIONAL DATALOAD
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setAdmin(data?.role)
      })
  }, [user.email])



  return {
    user,
    loginWithGoogle,
    userLogOut,
    registerUser,
    isLoading,
    error,
    loginWithOwnEmailAndPass,
    toggle,
    setToggle,
    handleClick,
    admin
  };
};
export default useFirebase;
