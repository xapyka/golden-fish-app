import React from 'react';
import { Link } from 'react-router-dom';
import '../app/app-header.css';
import AppHeader from '../app/header';

function Top() {
    return (
        <div>
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
        </div>
    )
}

export default Top;