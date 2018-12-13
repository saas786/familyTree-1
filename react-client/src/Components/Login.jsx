import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            password: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <form>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" placeholder="Enter your username." onChange={this.state.user_name}></input>
                        <label for="password">Password</label>
                        <input type="text" class="form-control" id="password" placeholder="Enter your password." onChange={this.state.password}></input>
                    </div>
                    {/* ADD POPUP TO BUTTON THAT SAYS SIGN UP HERE. */}
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    };
};
export default Login;