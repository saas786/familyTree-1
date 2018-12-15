import React, { Component } from "react";
/* Might want to use these to imlement logic about single person vs. couple */
// import SinglePerson from './SinglePerson';
// import Couple from './Couple';

class PersonNode extends Component {
  render() {
    const { className, nodeData } = this.props;
    let person = nodeData.name;
    if (nodeData.attributes.spouse != ""){
      person +=` - ${nodeData.attributes.spouse}`;
    }
    return (
      <div className="nodePerson">
        <p>{person}</p>
      </div>
    );
  }
}
export default PersonNode;
// {nodeData._children && (
//     <button>{nodeData._collapsed ? "Expand" : "Collapse"}</button>
//   )}