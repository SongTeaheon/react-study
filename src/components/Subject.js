import React, { Component } from 'react';
import '../css/mycss/Subject.css'
import TopNav from './TopNav.js';
import Jumbotron from './Jumbotron.js';


class Subject extends Component {
  render() {
    return (
      <header>  
        <TopNav/>
        <Jumbotron/>
      </header>
    );
  }
}

export default Subject;