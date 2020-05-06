import React from 'react';
import { Link } from 'react-router-dom';
import '../app/App.css';

function Top() {
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
                <Link to="/signin">
                    <button className="App-sign-in App-button">
                        Sign In
                        </button>
                </Link>
                <Link to="/signup">
                    <button className="App-sign-up App-button">
                        Sign Up
                        </button>
                </Link>
            </header>
        </div>
    )
}

export default Top;