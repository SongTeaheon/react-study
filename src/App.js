import React, {Component} from 'react';
import './index.css';
import './App.css';
import './css/bootstrap.min.css';
import Subject from './components/Subject.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';





//props, state가 바뀌면, render 재호출, 내부도 다시 호출
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        
    }
  }




  render() {
    return (
      <div className="App">
        <Subject/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}


export default App;
