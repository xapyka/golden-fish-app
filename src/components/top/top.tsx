import React from 'react';
import { Link } from 'react-router-dom';
import '../app/App.css';
import AppHeader from '../app/header';

function Top() {
    return (
        <div>
            <header className="App-header">

                <AppHeader />
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