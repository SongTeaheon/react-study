import React, { Component } from 'react';
import LeftNav from './LeftNav';
import BoardList from './BoardList.js';
import { Route, Switch } from 'react-router-dom';
import NewPost from './NewPost.js';
import axios from 'axios';
import PostDetail from './PostDetail.js';
import Login from './Users/Login.js';
import Join from './Users/Join.js';



class Body extends Component {
    constructor(props){
        super(props);
        this.selCategory(0);
    }
    state= {
        posts : []
    };
    
    inqPostData = (categoryNo) => {
        axios.get('http://localhost:8090/posts/list/' + categoryNo)
        .then(res => {
            console.log(res);
            this.setState({
                posts: res.data
            });
        });
    };

    selCategory = (ctgNo) => {
        console.log('selCategory');
        this.inqPostData(ctgNo);
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <LeftNav onClickCtg={this.selCategory}/>
                    </div>
                    <Switch>
                        <Route path="/posts/list"><BoardList posts={this.state.posts}/></Route>
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