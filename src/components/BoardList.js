import React, { Component } from 'react';
import ContentsList from './ContentsList.js';
import BoardPagination from './BoardPagination';
import Button from 'react-bootstrap/Button';


class BoardList extends Component {
    
    render() {
        return (
            <div className="col-md-9">
                <div>
                    <h5 className="card-title">Card title</h5>
                </div>
                <ContentsList posts={this.props.posts}/>
                <p><Button href="/posts/new" variant="secondary" style={{'float':'right'}}>글쓰기</Button></p>
                <BoardPagination />
            </div>

        );
    }
}

export default BoardList;