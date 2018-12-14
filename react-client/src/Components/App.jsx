import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import Login from "./Login";
import Signup from "./Signup";

class App extends Component {
  loginUser = event => {
    
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Dashboard />
          <ul class="list-inline text-center">
            <li class="list-inline-item"> <Login /> </li>
            <li class="list-inline-item"> <Signup /> </li>
          </ul>
        </div>
      </Router>
    );
  };
};
export default App;