import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp'

const App = () => {
  return (
    <div className="App">
      <h1>HOLA</h1>

      <main className="container">
        <Switch>
          <Route exact path="/" component={HomePage} /> 
          <Route exact path="/register" component={SignUp} /> 
        </Switch>
      </main>
    </div>
  );
}

export default App;
