import React, { Component } from 'react';
import '../App.css';
import Article from './Article';

class Feeds extends Component {
  render() {
    return (
        <div className="feeds">
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <Article></Article>
        </div>
    );
  }
}

export default Feeds;
