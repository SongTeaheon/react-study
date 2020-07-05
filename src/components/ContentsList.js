import React, { Component } from 'react';
import axios from 'axios';
import { thisTypeAnnotation } from '@babel/types';

class ContentsList extends Component {

    state= {
        posts : []
    };
    
    inqPostData = (categoryNo) => {
        axios.get('http://localhost:8090/posts/list/' + this.props.categoryNo)
        .then(res => {
            console.log(res);
            this.setState({
                posts: res.data
            });
        });
    };

    componentDidMount() {
        this.inqPostData(0);
    }

    componentDidUpdate() {
        this.inqPostData(this.props.categoryNo);
    }
    render() {
        return (
            <div id="app">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">제목</th>
                            <th scope="col">작성자</th>
                            <th scope="col">작성시간</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map(post=>
                        <tr>
                            <th scope="row">{post.postNo}</th>
                            <td>{post.title}</td>
                            <td>{post.writer}</td>
                            <td>{post.regTs}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }

    
}

export default ContentsList;