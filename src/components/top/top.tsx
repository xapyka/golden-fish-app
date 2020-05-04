import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import '../app/App.css';
import signUp from '../sign-up/sign-up';
import signIn from '../sign-in/sign-in';

function Top() {
    return (
        <BrowserRouter>
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
                <switch>
                    <Route path='/signin' component={signIn} />
                    <Route path='/signup' component={signUp} />
                </switch>
            </div>
        </BrowserRouter>
    )
}

export default Top