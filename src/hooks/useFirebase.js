import initializedAuthentication from "../firebase/firebase.init"
import {getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut, createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
initializedAuthentication();
const googleProvider = new GoogleAuthProvider();


//start useFirebase function


const useFirebase=()=>{
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
        .finally(()=>setIsLoading(false))
    }
  // create new user with email and password
  const newUserCreateWithEmailAndPassword =(email, password, name)=>{
     if(password.length < 6){
        return setError('password must be 6 ')
     }
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
        setUser(result.user);
    })
    .finally(()=>setIsLoading(false));
    
  }  
  // login with user Email and password ----
  const loginWithUserEmailAndPassword=(email, password)=>{
      setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then(result =>{
        console.log(result.user);
        setUser(result.user);
    })
    .finally(()=>setIsLoading(false));
  }
  // update user profile ---
//   const updateUserProfile=name=>{
//     updateProfile(auth.currentUser, {displayName:name})
//     .then(result =>{})
//   }
//user login out 
const userLoginOut = ()=>{
    setIsLoading(true)
    signOut(auth)
    .then(()=>{
        setUser({});
    })
    .finally(()=>setIsLoading(false));
}

// user observetion 
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
    error
} 

}

export default useFirebase;