import React, { Component } from "react";

class PersonNode extends Component {
  render() {
    const { className, nodeData } = this.props;
    let person = nodeData.name;
    if (nodeData.attributes.spouse != ""){
      person +=` - ${nodeData.attributes.spouse}`;
    }
    return (
      <div className="nodePerson">
        <button type="button" class="btn-dark">
        {person}
        </button>
      </div>
    );
  }
}
export default PersonNode;