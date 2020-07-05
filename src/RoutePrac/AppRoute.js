import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import './AppRoute.css';

import Subject from '../components/Subject.js';
import Body from '../components/Body.js';
import Footer from '../components/Footer.js';
import Home from '../components/Home.js';
import { Route, Switch, Link, NavLink, useParams } from 'react-router-dom';

//props, state가 바뀌면, render 재호출, 내부도 다시 호출
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    var topics = [
      { id: 1, title: "a", content: "aaa" },
      { id: 2, title: "b", content: "bbb" },
      { id: 3, title: "c", content: "ccc" }
    ]
    return (
      <div className="App">
        <Subject />
        {/* 링크 태그를 a태그 대신 이용하면 Route에 해당하는 컨텐츠만 reload
          * 링크 태그 없으면 전체 reload(Subejct와 Footer태그!) */}
        {/* Nav링크 태그를 링크태그 대신 이용하면 class="active" 생김*/}
        <ul>
          <li><h2><Link to="/">/</Link></h2></li>
          <li><h2><Link to="/home">/home</Link></h2></li>
          <li><h2><NavLink exact to="/">/ with NavLink</NavLink></h2></li>
          <li><h2><NavLink exact to="/home">/home with NavLink</NavLink></h2></li>
        </ul>
        {/* Switch는 먼저 걸리면 걸리고 끝나게! 
          * Swtich가 없으면 일부만 같아도 그 밑에 append됨. */}
        <Switch>
          <Route path="/home"><Home /></Route>
          <Route exact path="/"><Body /></Route>
          <Route path="/">Not Found</Route>
        </Switch>
        {/* HashRouter : url을 바꾸지 않도록!(#/~~ 가 쓰인다) */}
        <Footer />
      </div>
    );
  }
}


export default App;
