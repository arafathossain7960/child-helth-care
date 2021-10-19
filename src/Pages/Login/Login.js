import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const {loginWithGoogle, user, loginWithUserEmailAndPassword}=useAuth();

    const handleEmailChange=(e)=>{
        
       setEmail(e.target.value)
    }
    const handlePasswordChange=(e)=>{
        
        setPassword(e.target.value)
    }
   
    return (
        <div className="login-container">
            <div className="login-contain" >
             <div className="login-area">
                 <h3 className="text-center">Login</h3>
                 <label htmlFor="">User email</label>
                <input onBlur={handleEmailChange} type="email"  className="form-control" placeholder="Email" required />
                <br />
                <label htmlFor="">User password</label>
                <input onBlur={handlePasswordChange} type="password" className="form-control" placeholder="password" required  />
                <br />

                <div className="text-center">
                <button onClick={()=>loginWithUserEmailAndPassword(email, password)}  className="button ">Login</button>
                </div>
                <p className="text-right">Forgot password?</p>
          </div>
            
    
                <div className="text-center">
                <p>--- or Sign in using ---</p>
                <button onClick={loginWithGoogle} className="btn btn-primary" > Google sing in</button>
                
                <p><Link to="/register">Creat new account?</Link></p>
               

                </div>
             </div>
             </div>
        
    );
};

export default Login;