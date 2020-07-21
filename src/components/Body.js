import React, { Component } from 'react';
import LeftNav from './LeftNav';
import BoardList from './BoardList.js';
import { Route, Switch } from 'react-router-dom';
import NewPost from './NewPost.js';
import PostDetail from './PostDetail.js';
import Login from './Users/Login.js';
import Join from './Users/Join.js';



class Body extends Component {
    constructor(props){
        super(props);
        //this.selCategory(0);
    }
    state= {
        categoryNo : 0
    };

    selCategory = (ctgNo) => {
        console.log('sel category');
        this.setState({
            categoryNo : ctgNo
        });
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <LeftNav onClickCtg={this.selCategory}/>
                    </div>
                    <Switch>
                        <Route path="/posts/list"><BoardList categoryNo={this.state.categoryNo}/></Route>
                        <Route path="/posts/new"><NewPost mod="insert"/></Route>
                        <Route path="/posts/:id/mod" component={(props) => <NewPost mod="update"/>}></Route>
                        <Route path="/posts/:id" component={(props) => <PostDetail onDeleteComple={this.selCategory}/>}></Route>
                        <Route path="/users/login"><Login/></Route>
                        <Route path="/users/join"><Join/></Route>
                        <Route path="/">not found</Route>
                    </Switch>
                    
                </div>
            </div>    
    );
  }
}

export default Body;