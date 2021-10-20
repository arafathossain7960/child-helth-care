import initializedAuthentication from "../firebase/firebase.init"
import {getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut, createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
initializedAuthentication();
const googleProvider = new GoogleAuthProvider();


//start useFirebase function


const useFirebase=()=>{
    const [loginError, setLoginError]=useState('');
    const [error, setError]=useState('');
    const [user, setUser]=useState({});
    const [isLoading, setIsLoading]=useState(true)
    const auth= getAuth();

    // Login with google ----
    const loginWithGoogle=()=>{
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error=>{
            setError(error.massage)
        })
        .finally(()=>setIsLoading(false))
    }
  // create new user with email and password
  const newUserCreateWithEmailAndPassword =(email, password)=>{
      if((email&&password)==""){
return setError("please enter your email and password")
      }
     if(password.length < 6){
        return setError('password must be 6 characters ')
     }
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
        setUser(result.user);
    })
    .catch(error=>{
        setError(error.massage)
    })
    .finally(()=>setIsLoading(false));

    
  }  
  // login with user Email and password ----
  const loginWithUserEmailAndPassword=(email, password)=>{
      if((email&&password)==''){
          return setLoginError("please enter your email and password")
      }
      setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then(result =>{
        setUser(result.user);
    })
    .catch(error=>{
        setError(error.massage)
    })
    .finally(()=>setIsLoading(false));
  }

//user login out 
const userLoginOut = ()=>{
    setIsLoading(true)
    signOut(auth)
    .then(()=>{
        // setUser({});
    })
    .catch(error=>{
        setError(error.massage)
    })
    .finally(()=>setIsLoading(false));
}

// user observation
useEffect(()=>{
 const unSubscribed = onAuthStateChanged(auth, user=>{
    if(user){
        setUser(user)
    }else{setUser({})}
    setIsLoading(false)
});
return ()=>unSubscribed;

},[])
return{
    isLoading,
    loginWithUserEmailAndPassword,
    newUserCreateWithEmailAndPassword,
    userLoginOut,
    loginWithGoogle,
    user,
    error,
    loginError
} 

}

export default useFirebase;