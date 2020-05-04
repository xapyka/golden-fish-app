import React from 'react';
import { Link } from 'react-router-dom';
import '../app/App.css';


function signIn() {
    return (
        <div>
            <header className="App-header">
                <img src="/logo.png" className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            This is sign in page.
            <button className="App-sign-in App-button">
                    <Link to="/signin">Sign In</Link>
                </button>
                <button className="App-sign-up App-button">
                    <Link to="/signup">Sign Up</Link>
                </button>
            </header>
        </div>
    )

}

export default signIn