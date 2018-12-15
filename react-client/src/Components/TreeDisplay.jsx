import React, { Component } from "react";
import Tree from "react-d3-tree";
import PersonNode from './PersonNode';
import CreateNode from './CreateNode';

/* Uses https://github.com/bkrem/react-d3-tree for basic tree logic*/

const myTreeData = [
  {
    name: "Jay Pritchett",
    attributes: {
      spouse: "Gloria Pritchett",
    },
    children: [
      {
        name: "Claire Pritchett",
        attributes: {
          spouse: "Phil Dunphy"
        },
        children: [
          {
            name: "Hayley Dunphy",
            attributes: {
              spouse: ""
            }
          },{
            name: "Alex Dunphy",
            attributes: {
              spouse: ""
            }
          },{
            name: "Luke Dunphy",
            attributes: {
              spouse: ""
            }
          }
        ]
      },{
        name: "Mitchell Pritchett",
        attributes: {
          spouse: "Cameron Tucker"
        },
        children: [
          {
            name: "Lily Pritchett-Tucker",
            attributes: {
              spouse: ""
            }
          }
        ]
      },{
        name: "Joe Pritchett",
        attributes: {
          spouse: ""
        }
      },{
        name: "Manny Delgado",
        attributes: {
          spouse: ""
        }
      }
    ]
  }
];

class TreeDisplay extends Component {
  render() {
    return (
      //{/* <Tree /> will fill width/height of its container; in this case `#treeWrapper` */}
      <div id="treeWrapper">
        <Tree data={myTreeData} pathFunc="elbow" orientation="verticle" allowForeignObjects 
        nodeLabelComponent={{
          render: <PersonNode className='myLabelComponentInSvg'/>,
          foreignObjectWrapper: {
            y: 24,
            x: 5
          }
        }
      }/>
      <ul class="list-inline text-center">
        <li class="list-inline-item"><CreateNode /></li>
      </ul>
      </div>
    );
  }
}
export default TreeDisplay;
