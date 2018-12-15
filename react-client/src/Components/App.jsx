import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const Home = () => < Dashboard />;
const Create = () => <h2>Create</h2>;
const View = () => <TreeDisplay />;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        </div>
      </Router>
    );
  };
};
export default App;