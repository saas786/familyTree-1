import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="#">
                        <p>Create</p>
                        <p>View</p>
                    </a>
                </nav>
                <main role="main">
                    <div className="jumbotron">
                        <div className="container">
                            <h1 className="display-3"> Welcome to Your Family Tree</h1>
                            <p> INSERT TREE COMPONENT HERE.</p>
                        </div>
                    </div>
                </main>
            </div>
        );
    };
};
export default Dashboard;