import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import TreeDisplay from "./TreeDisplay";
import Octicon, {Person} from '@githubprimer/octicons-react';

const Home = () => < Dashboard function={loadText} />;
const View = () => <TreeDisplay />;

function loadText() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("user-name").innerHTML =
      "Hello, User!";
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

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
              <li class="nav-item"><Link to="/view/">View</Link></li>
            </ul>
            {/* <span class="nav-item mx-lg-2"> <User /></span> */}
            <p class="user" id="user-name">Please login!</p>
            <div class="user">
              <Octicon icon={Person} />
            </div>
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/view/" component={View} />
        </div>
      </Router>
    );
  }
}
export default App;
