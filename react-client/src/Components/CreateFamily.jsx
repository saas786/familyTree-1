import React, { Component } from "react";

class CreateFamily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      firstname: "",
      lastname: "",
      pf: "",
      pl: "",
      mf: "",
      ml: "",
      age: null,
      gender: "",
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  upload() {
    const data = new FormData();
    const addEndpoint = "http://localhost:3000/api/person/"

    axios
      .post(addEndpoint, data) //sends csv to a data endpoint
      .then(res => {
        this.setState({id: res.data._id});
        this.setState({message: res.data.message});
        this.loading();
      }).catch(res => {
        this.setState({message: res.data.message});
      });
      
  };


  render() {
    return (
      <div class="text-left">
        <h1>Begin tracing your Matrilineal or Patrilineal Line Here</h1>
        <form>
          <div class="form-group">
            <h1>Father:</h1>
            <label for="p1firstname">First Name:</label>
            <input type="text" class="form-control" id="pf" placeholder="Father's first name" value={this.state.pf} onChange={this.handleChange} />
            <label for="p1lastname">Last Name:</label>
            <input type="text" class="form-control" id="pl" placeholder="Father's last name" value={this.state.pl} onChange={this.handleChange} />
            <h1>Mother:</h1>
            <label for="p2firstname">First Name:</label>
            <input type="text" class="form-control" id="mf" placeholder="Mother's first name" value={this.state.mf} onChange={this.handleChange} />
            <label for="p2lastname">Last Name:</label>
            <input type="text" class="form-control" id="ml" placeholder="Mother's last name" value={this.state.ml} onChange={this.handleChange} />
            <h1>Your Info:</h1>
            <label for="firstname">First Name:</label>
            <input type="text" class="form-control" id="firstname" placeholder="Enter your first name" value={this.state.firstname} onChange={this.handleChange} />
            <label for="lastname">Last Name:</label>
            <input type="text" class="form-control" id="lastname" placeholder="Enter your last name" value={this.state.lastname} onChange={this.handleChange} />
            <label for="age">Age:</label>
            <input type="number" class="form-control" id="age" value={this.state.age} onChange={this.handleChange} />
            <label for="gender">
              Gender:
                <select value={this.state.gender} onChange={this.fileChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
          </div>
          <button type='button' onClick={this.upload}>Submit</button>
        </form>
      </div>
    );
  }
}
export default CreateFamily;
