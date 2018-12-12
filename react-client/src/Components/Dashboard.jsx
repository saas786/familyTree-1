import React, { Component } from 'react';
import {
    Navbar
} from 'reactstrap';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <nav>
                    <a className="navbar-brand" href="#">
                        <p>Create</p>
                        <p>View</p>
                    </a>
                </nav>
                <main role="main">
                </main>
            </div>
        );
    };
};
export default Dashboard;