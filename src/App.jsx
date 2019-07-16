import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/container/login';
import Register from './components/container/register';
import Welcome from './components/container/welcome';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/welcome" component={Welcome} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;