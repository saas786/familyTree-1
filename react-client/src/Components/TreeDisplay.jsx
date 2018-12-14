import React, { Component } from "react";
import Tree from "react-d3-tree";

/* Uses https://github.com/bkrem/react-d3-tree for basic tree logic*/

const myTreeData = [
  {
    name: "Jay Pritchet",
    attributes: {
      Spouse: "Gloria Pritchet",
    },
    children: [
      {
        name: "Claire Pritchet",
        attributes: {
          Spouse: "Phil Dunfey"
        },
        children: [
          {
            name: "Hayley Dunfey",
          },{
            name: "Alex Dunfey",
          },{
            name: "Son Dunfey",
          }
        ]
      },
      {
        name: "Mitchell Pritchet",
        attributes: {
          Spouse: "Dean Something"
        }
      }
    ]
  }
];

class TreeDisplay extends Component {
  render() {
    return (
      //{/* <Tree /> will fill width/height of its container; in this case `#treeWrapper` */}
      <div id="treeWrapper" style={{ width: "50em", height: "20em" }}>
        <Tree data={myTreeData} pathFunc="elbow" orientation="verticle" />
      </div>
    );
  }
}
export default TreeDisplay;
