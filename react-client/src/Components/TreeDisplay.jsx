import React, { Component } from "react";
import Tree from "react-d3-tree";
import PersonNode from './PersonNode';

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

class TreeDisplay extends React.PureComponent {
  state = {}

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 4
      }
    });
  };

  render() {
    return (
      <div id="treeWrapper" ref={tc => (this.treeContainer = tc)}>
        <Tree
        data={myTreeData}
        pathFunc="elbow"
        orientation="verticle"
        translate={this.state.translate}
        allowForeignObjects
        nodeLabelComponent={{
          render: <PersonNode className='myLabelComponentInSvg'/>,
          foreignObjectWrapper: {
            y: 24,
            x: 5
          }
        }}/>
      </div>
    );
  }
}
export default TreeDisplay;
