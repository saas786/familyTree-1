import React, { Component } from "react";
import Tree from "react-d3-tree";
import PersonNode from './PersonNode';
import Keycloak from 'keycloak-js';

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
  constructor(props) {
    super(props);
    this.state = {
      keycloak: null,
      authenticated: false,
      x: 0,
      y: 0
    };
  }

  componentDidMount() {
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({onLoad: 'login-require'}).then(authenticated => {
      this.setState({keycloak: keycloak, authenticated: authenticated })
    })

    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 4
      }
    })
  };

  render() {
    if (this.state.keycloak) {
      if (this.state.authenticated) return (
        <div id="treeWrapper" ref={tc => (this.treeContainer = tc)}>
        <Tree
        data={myTreeData}
        pathFunc="elbow"
        orientation="vertical"
        translate={this.state.translate}
        allowForeignObjects
        nodeLabelComponent={{
          render: <PersonNode className='myLabelComponentInSvg'/>,
          foreignObjectWrapper: {
            y: 15,
            x: 5
          }
        }}/>
      </div>
      ); else return(
        <div> Unable to authenticate! Please try again. </div>)
    }
    return (
      <div> Initializing Keycloak... </div>
    );
  }
}
export default TreeDisplay;
