import React, { Component } from 'react';
import Login from "./Login";

class Dashboard extends Component {
    render() {
        return (
            <div>
                
                <main role="main">
                    <div className="jumbotron">
                        <div className="container">
                            <h1 className="display-3"> Welcome to Your Family Tree</h1>
                            <Login />
                            {/* <p> INSERT TREE COMPONENT HERE.</p> */}
                        </div>
                    </div>
                </main>
            </div>
        );
    };
};
export default Dashboard;