import React, { Component } from 'react';
import ContentsList from './ContentsList.js';
import BoardPagination from './BoardPagination';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class BoardList extends Component {
    constructor(props) {
        super(props);
        this.inqPostData();
    }

    state = {
        posts: [],
        pager: {
            pageSize: 5,
            pageNum: 1
        }
    }

    componentDidUpdate(prevProps) {
 
        if (prevProps.categoryNo !== this.props.categoryNo) {
            console.log('prevProps.categoryNo', prevProps.categoryNo);
            console.log('this.props.categoryNo', this.props.categoryNo);
            console.log('categoryNo is changed');
            this.inqPostData();
        }
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if(prevState.pager.pageNum !== this.state.pager.pageNum){
            console.log('categoryNo is changed');
            this.inqPostData();
        }
        return null;
    }

    inqPostData = () => {
        console.log('inqPostData');
        axios.get('http://localhost:8090/posts/pagingList/' + this.props.categoryNo, {
            params: this.state.pager
        })
            .then(res => {
                console.log(res);
                this.setState({
                    posts: res.data
                });
            });
    };

    changePage = (i) => {
        console.log('changePage : ', i);
        this.setState({
            pager: {
                pageSize: 5,
                pageNum: i
            }
        });
    }
    render() {
        return (
            <div className="col-md-9">
                <div>
                    <h5 className="card-title">Card title</h5>
                </div>
                <ContentsList posts={this.state.posts} />
                <p><Button href="/posts/new" variant="secondary" style={{ 'float': 'right' }}>글쓰기</Button></p>
                <BoardPagination onChangePage={this.changePage} />
            </div>

        );
    }
}

export default BoardList;