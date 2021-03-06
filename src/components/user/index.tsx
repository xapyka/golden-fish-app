import React from 'react';
import AppHeader from '../app/header';
import ImageUpLoader from './image-uploader';

function UserPage() {
    return (
        <div>
            <header className="App-header">
                <AppHeader />
                <ImageUpLoader />
            </header>
        </div>
    )
}

export default UserPage;