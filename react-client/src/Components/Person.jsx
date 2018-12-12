import React, { Component } from 'react';
//import data from '../test'
var data = {
    "test":[
        { "name":"Zoe"},
        { "name":"Ayse"},
        { "name":"Max"},
        { "name":"Julia"}
    ]
}
console.log(data.test[0].name);
class Person extends Component {
    render() {
        return(
            <div>   
                <p>{this.props.name}</p>
            </div>
        );
    };
};
export default Person;