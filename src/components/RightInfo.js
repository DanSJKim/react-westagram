import React, { Component } from 'react';
import '../App.css';

class RightInfo extends Component {
    render() {
        return(
            <li className="right-info-li">
                <a href="">{this.props.value}</a>
            </li>
        );
    }
}

export default RightInfo;

