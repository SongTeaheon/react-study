import React, { Component } from 'react';
import { thisTypeAnnotation } from '@babel/types';

class ContentsList extends Component {

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
                        {this.props.posts.map(post=>
                        <tr key={post.postNo}>
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