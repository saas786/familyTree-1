import React, { Component } from 'react';
//import Person from './Person';
// import dTree from 'd3-dtree';
import Tree from react-tree-graph;

let data = {
    name: 'Zoe',
    children: [
        {
            name: 'Ayse',
            children: [
                {
                    name: 'Leyla'
                }, {
                    name: 'Asla'
                }
            ]
        }, {
            name: 'Tony',
            children: [
                {
                    name: 'Jackie'
                }, {
                    name: 'Midge'
                }
            ]
        }
    ]
};

// let data = [{
//     name: "Father",                         // The name of the node
//     class: "node",                          // The CSS class of the node
//     textClass: "nodeText",                  // The CSS class of the text in the node
//     depthOffset: 1,                         // Generational height offset
//     marriages: [{                           // Marriages is a list of nodes
//       spouse: {                             // Each marriage has one spouse
//         name: "Mother",
//       },
//       children: [{                          // List of children nodes
//         name: "Child",
//       }]
//     }],
//     extra: {}                               // Custom data passed to renderers
//   }]
 


class TreeDisplay extends Component {
    
    render(){
        // return <div>
        // {
        //     group.root.map((d, i) =>
        //         < Person name={group.root[i].name}>{group.root[i].name}</ Person >)
        // }
        // </div>
        return(
            <Tree
            data={data}
            height={400}
            width={400}/>
            // <p>Cheese</p>
            
        );
        // dTree.init(data, options);
    };
};
export default TreeDisplay;