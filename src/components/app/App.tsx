import React from 'react';
import Top from '../top/top'
import signUp from '../sign-up/sign-up';
import signIn from '../sign-in/sign-in';
import User from '../user/index';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route exact path="/" component={Top} />
        <Route path='/signin' component={signIn} />
        <Route path='/signup' component={signUp} />
        <Route path='/user' component={User} />
      </switch>
    </BrowserRouter>
  )
}

export default App;
