import React, { Component } from 'react';

class InstaLogo extends Component {
    render() {
        return(
            <div className="img-logo">
                <img src={this.props.img} alt="logo" />
            </div>
        );
    }
}

export default InstaLogo;