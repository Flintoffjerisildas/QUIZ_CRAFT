import React from 'react';
import './register&loginStyles.css';
import { Link } from 'react-router-dom';
function Register() {
  return (
    <div className="container">
        <h1>Register</h1>
        <form action="/signup" method="POST">
            <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required></input>
            </div>
            <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
            </div>
            <div className="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required></input>
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <div className="signup-option">
            <p>Already have an account? <Link to="/Login">Sign in</Link></p>
        </div>
    </div>
  )
}

export default Register