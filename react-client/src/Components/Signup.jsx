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
            <div>
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
                                        <label for="username">Create a Username</label>
                                        <input type="text" class="form-control" id="username" placeholder="Enter your username" value={this.state.user_name} onChange={this.handleChange}></input>
                                        <label for="password">Create a Password</label>
                                        <input type="text" class="form-control" id="password" placeholder="Enter your password" data-toggle="password" value={this.state.password} onChange={this.handleChange}></input>
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