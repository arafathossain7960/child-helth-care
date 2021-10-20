import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';
const Register = () => {
   
    
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const {loginWithGoogle, user, error,newUserCreateWithEmailAndPassword}=useAuth();
    const handleCreateEmailChange=(e)=>{
        setEmail(e.target.value);
        
    }
    const handleCreatePasswordChange=(e)=>{
        setPassword(e.target.value);
    }
  
   
    return (
     <div className="login-container">
         <div className="login-contain">
             <div className="login-area">
            <h3 className="text-center">Please Register with us</h3>
            <br />
            {/* <input onBlur={handleCreateNameChange} type="text" className="form-control" placeholder="Enter your Name" required />
               <br /> */}
                <input onBlur={handleCreateEmailChange} type="email" className="form-control" placeholder="Enter your E-mail" required />
               <br />
                <input onBlur={handleCreatePasswordChange} type="password" className="form-control" placeholder="Enter your password" required />
                 <br />
               
            
             <div className="text-center">
             
                <button onClick={()=>newUserCreateWithEmailAndPassword(email, password)} className="button">Register</button>
             </div>
             <div className="text-center">
             <p>--- or Sign in using ---</p>
                <button className="btn btn-primary" onClick={loginWithGoogle}>Google</button>
              <p>  <Link to="/login">Login</Link></p>
              <p className="text-danger">{error}</p>
             </div>
         </div>
        </div>
        </div>
       
    );
};

export default Register;