import React, { Component } from "react";
/* Might want to use these to imlement logic about single person vs. couple */
// import SinglePerson from './SinglePerson';
// import Couple from './Couple';

class PersonNode extends Component {
  render() {
    const { className, nodeData } = this.props;
    return (
      <div className="nodePerson">
        <h1>{nodeData.name}</h1>
        <h1>{nodeData.attributes.spouse}</h1>
      </div>
    );
  }
}
export default PersonNode;
// {nodeData._children && (
//     <button>{nodeData._collapsed ? "Expand" : "Collapse"}</button>
//   )}