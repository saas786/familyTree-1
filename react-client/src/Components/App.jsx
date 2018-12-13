import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import Login from "./Login";
import Signup from "./Signup";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Dashboard />
          <Login />
          <Signup />
        </div>
      </Router>
    );
  };
};
export default App;