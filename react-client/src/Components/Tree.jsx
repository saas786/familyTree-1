import React, { Component } from 'react';
import Person from './Person'
var data = {
    "test":[
        { "name":"Zoe"},
        { "name":"Ayse"},
        { "name":"Max"},
        { "name":"Julia"}
    ]
}
console.log(data.test[0].name);
class Tree extends Component {
    //data2 = data.test;
    render() {
        return <div>
        {
            data.test.map((d, i) =>
                < Person name={data.test[i].name}>{data.test[i].name}</ Person >)
        }
        </div>
    };
};
export default Tree;