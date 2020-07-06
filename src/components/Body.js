import React, { Component } from 'react';
import LeftNav from './LeftNav';
import BoardList from './BoardList.js';
import { Route, Switch } from 'react-router-dom';
import NewPost from './NewPost.js';
import axios from 'axios';



class Body extends Component {

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
        this.inqPostData(ctgNo);
    };

    componentDidMount(){
        this.inqPostData(0);
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
                        <Route path="/posts/new"><NewPost/></Route>
                        <Route path="/">not found</Route>
                        {/* <Route path="/:id">board detail</Route> */}
                    </Switch>
                    
                </div>
            </div>    
    );
  }
}

export default Body;