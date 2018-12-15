import React, { Component } from 'react';

class CreateNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            age: null,
            gender: "",
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
                    Add Family Member
                </button>

                <div class="modal fade" id="signUpForm" tabIndex="-1" role="dialog" aria-labelledby="signUpTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content add-member">
                            <div class="modal-header">
                                <h5 class="modal-title" id="signUpTitle">Add Member Below</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="text-left">
                                <form>
                                    <div class="form-group">
                                        <label for="firstname">First Name:</label>
                                        <input type="text" class="form-control" id="firstname" placeholder="Enter your first name" value={this.state.firstname} onChange={this.handleChange}/>
                                        <label for="lastname">Last Name:</label>
                                        <input type="text" class="form-control" id="lastname" placeholder="Enter your last name" value={this.state.lastname} onChange={this.handleChange}/>
                                        <label for="age">Age:</label>
                                        <input type="number" class="form-control" id="age" value={this.state.age} onChange={this.handleChange}/>
                                        <label for="firstname">Parent First Name:</label>
                                        <input type="text" class="form-control" id="firstname" placeholder="Enter your first name" value={this.state.firstname} onChange={this.handleChange}/>
                                        <label for="lastname">Parent Last Name:</label>
                                        <input type="text" class="form-control" id="lastname" placeholder="Enter your last name" value={this.state.lastname} onChange={this.handleChange}/>
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
export default CreateNode;