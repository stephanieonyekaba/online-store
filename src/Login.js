import React from 'react'
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { auth } from './firebase'

function Login() {
    //this is so we can save the login history of the user
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        
        auth 
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            navigate('/')
        })
        .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

    //first it will create a user and email (we are passing in the user and email)
    //for whcih we set state with above
    //and in the .then, if everything worked out it will create an object 
        auth 
            .createUserWithEmailAndPassword(email, password)
            .then ((auth => {
                //this means it successfully created a new user 
                //with email and password
                console.log(auth)
                // here we are saying if the accoutn was sucessfully created,
                //redirect the user to the home page('/')
                if (auth) {
                    navigate('/')
                }
            }))
            //here we send out an error message if for some reason 
            //we were not able to sucessfully make the email/password object
            .catch(error => alert(error.message))

    }

  return (
    <div className='login'>
        <Link to="/">
            <img className="login__logo" src="https://i.ibb.co/phvwmjM/Screen-Shot-2022-07-15-at-6-42-12-PM.png" alt="" />
        </Link>
    <div className="login__container">
        <h1>Sign in </h1>
        <form>
            <h5>Email</h5>
            {/* //we are setting the value equal to email which we set state with above
            //the "onChange" function calls an event that maps the event to 
            the value, which in this case would be us typing in the input feild.  */}

            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button type='submit' className='login__signInButton' onClick={signIn}>Sign in </button>
        </form>
        <p>
        By signing-in you agree to the BRAND BEAUTY Conditions of Use & Fake Sale. None of the products listed are for sale via BRAND BEAUTY. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button onClick={register} className='login__registerButton'>Create an Account</button>
    </div>
    </div>
  )
}

export default Login