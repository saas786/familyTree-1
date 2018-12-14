import React, { Component } from 'react';
import Login from "./Login";
import TreeDisplay from "./TreeDisplay";

class Dashboard extends Component {
    render() {
        return (
            <div>
                
                <main role="main">
                    <div className="jumbotron">
                        <div className="container">
                            <h1 className="display-3"> Welcome to Your Family Tree</h1>
                            <TreeDisplay />
                        </div>
                    </div>
                </main>
            </div>
        );
    };
};
export default Dashboard;