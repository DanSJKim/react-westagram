import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import Feeds from '../components/Feeds';
import MainRight from '../components/MainRight';

class Main extends Component {
  render() {
    return (
        <div className='body'>
          <Header></Header>
          <main>
            <Feeds></Feeds>
            <MainRight></MainRight>
          </main>
        </div>
    );
  }
}

export default Main;
