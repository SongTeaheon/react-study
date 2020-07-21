import React, { Component } from 'react';
import { thisTypeAnnotation } from '@babel/types';

class ContentsList extends Component {

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('ContentsList getSnapshotBeforeUpdate');
        return null;
    }
    shouldComponentUpdate(nextProps) {
        return nextProps.posts !== this.props.posts;
    }
    moveDetail = (postNo) => {

    };
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
                        <tr key={post.postNo} onClick={this.moveDetail(post.postNo)}>
                            <th scope="row">{post.postNo}</th>
                            <td><a href={"/posts/"+post.postNo}>{post.title}</a></td>
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