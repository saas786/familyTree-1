import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from "./Dashboard";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Dashboard />
        </div>
      </Router>
    );
  };
};
export default App;