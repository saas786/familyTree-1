import React, { Component } from 'react';
import Octicon, {Person} from '@githubprimer/octicons-react'

class Nav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a class="navbar-brand" href="#"> JAMZ </a>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">Create</li>
                        <li class="nav-item">View</li>
                    </ul>
                    {/* <span class="nav-item mx-lg-2"> <User /></span> */}
                    <div class="user"><Octicon icon={Person}/></div>
                </nav>
            </div>
        );
    };
};
export default Nav;