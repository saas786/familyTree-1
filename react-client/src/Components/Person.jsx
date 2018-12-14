import React, { Component } from 'react';

class Person extends Component {
    render() {
        return(
            <div>   
                <p>{this.props.name}</p>
                <p>{this.props.id}</p>
            </div>
        );
    };
};
export default Person;