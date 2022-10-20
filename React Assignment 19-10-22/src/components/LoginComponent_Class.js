import React from 'react';
import '../css/login.css';

class LoginClassComponent extends React.Component {
    render() {
        return(
            <div className="layout">
            <div className="heading">
                <h3>Sign up now</h3>
                <p>Get access to your orders and chat for support.</p>
            </div>
            <div className="login-form">
                <form>
                    <input type="text" placeholder="Enter Username"></input><br></br>
                    <input type="password" placeholder="Password"></input><br></br>
                    <button type="submit">Sign In</button>
                    <a href="www.google.com">Terms and Conditions</a>
                </form>
            </div>
        </div>
        )
    }
}

export default LoginClassComponent;