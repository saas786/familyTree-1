import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return (
            <div class="text-left">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#signUpForm">
                    Sign Up Here
                </button>

                <div class="modal fade" id="signUpForm" tabIndex="-1" role="dialog" aria-labelledby="signUpTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="signUpTitle">Sign Up Below</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="firstname"> First Name: </label>
                                        <input type="text" class="form-control" id="firstname" value={this.state.first_name} onChange={this.handleChange}></input>

                                        <label for="lastname"> Last Name: </label>
                                        <input type="text" class="form-control" id="lastname" value={this.state.last_name} onChange={this.handleChange}></input>

                                        <label for="age"> Age: </label>
                                        <input type="number" class="form-control" id="age" value={this.state.age} onChange={this.handleChange}></input>
                                        <div class="radio">
                                            <label for="gender"> Gender: </label> <br />
                                            <input type="radio" id="gender" value={this.state.gender} onChange={this.handleChange} /> Male <br />
                                            <input type="radio" id="gender" value={this.state.gender} onChange={this.handleChange} /> Female <br />
                                            <input type="radio" id="gender" value={this.state.gender} onChange={this.handleChange} />Prefer not to say
                                        </div>
                                        <label for="username">Create a Username</label>
                                        <input type="text" class="form-control" id="username" placeholder="Enter your username" value={this.state.user_name} onChange={this.handleChange}></input>
                                        <label for="password">Create a Password</label>
                                        <input type="password" class="form-control" id="password" placeholder="Enter your password" data-toggle="password" value={this.state.password} onChange={this.handleChange}></input>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
export default Signup;