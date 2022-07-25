import React from 'react'
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='login'>
        <Link to="/">
            <img className="login__logo" src="https://i.ibb.co/phvwmjM/Screen-Shot-2022-07-15-at-6-42-12-PM.png" alt="" />
        </Link>
    <div className="login__container">
        <h1>Sign in </h1>
        <form>
            <h5>Email</h5>
            <input type="text" />

            <h5>Password</h5>
            <input type="password" />
            <button>Sign in </button>
        </form>

    </div>
    </div>
  )
}

export default Login