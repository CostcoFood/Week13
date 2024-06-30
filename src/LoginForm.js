import React from "react";
import './App.css';

function LoginForm() {
    return(
        <div className="login-form-container">
            <h3 className="login-title">Log In</h3>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id='username' name="username" />
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}
export default LoginForm;