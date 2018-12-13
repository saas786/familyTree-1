import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Dashboard />
        </div>
      </Router>
    );
  };
};
export default App;