import React, { Component } from "react";
import Tree from "react-d3-tree";
import PersonNode from './PersonNode';

/* Uses https://github.com/bkrem/react-d3-tree for basic tree logic*/

const myTreeData = [
  {
    name: "Jay Pritchet",
    attributes: {
      spouse: "Gloria Pritchet",
    },
    children: [
      {
        name: "Claire Pritchet",
        attributes: {
          spouse: "Phil Dunfey"
        },
        children: [
          {
            name: "Hayley Dunfey",
            attributes: {
              spouse: "",
            },
          },{
            name: "Alex Dunfey",
            attributes: {
              spouse: "",
            },
          },{
            name: "Son Dunfey",
            attributes: {
              spouse: "",
            },
          }
        ]
      },
      {
        name: "Mitchell Pritchet",
        attributes: {
          spouse: "Dean Something"
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
        <Tree data={myTreeData} pathFunc="elbow" orientation="verticle" allowForeignObjects 
        nodeLabelComponent={{
          render: <PersonNode className='myLabelComponentInSvg'/>,
          foreignObjectWrapper: {
            y: 24
          }
        }
      }/>
      </div>
    );
  }
}
export default TreeDisplay;
