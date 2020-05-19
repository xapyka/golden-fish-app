import React from 'react';
import Top from '../top/top'
import signUp from '../sign-up/sign-up';
import signIn from '../sign-in/sign-in';
import UserPage from '../user';
import { BrowserRouter, Route } from 'react-router-dom';
import '../app/app.css';

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route exact path="/" component={Top} />
        <Route path='/signin' component={signIn} />
        <Route path='/signup' component={signUp} />
        <Route path='/user' component={UserPage} />
      </switch>
    </BrowserRouter>
  )
}

export default App;
