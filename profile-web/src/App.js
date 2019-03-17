import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Home from './components/misc/Home';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-12">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
