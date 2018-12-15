import React, { Component } from 'react';
import Login from "./Login";
import Signup from "./Signup";


class Dashboard extends Component {
    render() {
        return (
            <div>
                <main role="main">
                    <div className="jumbotron">
                        <div className="container">
                            <h1 className="display-3"> Welcome to Your Family Tree</h1>
                            <p>Our application allows you to trace your patrilineal or matrilineal line (mothers side or fathers side) and explore your heritage.</p>
                            <p>Please login in order to begin your journey</p>
                        </div>
                    </div>
                    <ul class="list-inline text-center">
                        <li class="list-inline-item"> <Login /> </li>
                        <li class="list-inline-item"> <Signup /> </li>
                    </ul>
                </main>
                
            </div>
        );
    };
};
export default Dashboard;
