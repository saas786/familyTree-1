import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import TreeDisplay from "./TreeDisplay";
import Octicon, {Person} from '@githubprimer/octicons-react'
import CreateFamily from './CreateFamily';

const Home = () => < Dashboard />;
const Create = () => <h2>< CreateFamily /></h2>;
const View = () => <TreeDisplay />;

class App extends Component {
  // loginUser = event => {};
  render() {
    return (
      <Router>
        <div>
          <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <Link class="navbar-brand" to="/">JAMZ</Link>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item"><Link to="/">About</Link></li>
              <li class="nav-item"><Link to="/create/">Create</Link></li>
              <li class="nav-item"><Link to="/view/">View</Link></li>
            </ul>
            {/* <span class="nav-item mx-lg-2"> <User /></span> */}
            <div class="user">
              <Octicon icon={Person} />
            </div>
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/create/" component={Create} />
          <Route path="/view/" component={View} />
        </div>
      </Router>
    );
  }
}
export default App;
