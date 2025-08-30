import React from 'react'

function Login() {
  return (
    <div className="container">
        <h1>Login</h1>
        <form action="/login" method="POST">
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required></input>
            </div>
            <button type="submit">Signin</button>
        </form> 
    
    <div className="signup-option">
        <p>Don't have an account? <a href="signup.html">Sign up</a></p>
    </div>
    </div>
  )
}

export default Login