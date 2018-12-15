import React, { Component } from "react";

class CreateFamily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      age: null,
      gender: "",
      children: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    return (
      <div class="text-left">
        <h1>Begin tracing your Matrilineal or Patrilineal Line Here</h1>
        <p>Please enter the first member of your line</p>
        <form>
          <div class="form-group">
            <label for="firstname">First Name:</label>
            <input type="text" class="form-control" id="firstname" placeholder="Enter your first name" value={this.state.firstname} onChange={this.handleChange}/>
            <label for="lastname">Last Name:</label>
            <input type="text" class="form-control" id="lastname" placeholder="Enter your last name" value={this.state.lastname} onChange={this.handleChange}/>
            <label for="age">Age:</label>
            <input type="number" class="form-control" id="age" value={this.state.age} onChange={this.handleChange}/>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default CreateFamily;
