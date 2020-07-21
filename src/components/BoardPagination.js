import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';

class BoardPagination extends Component {
    constructor(props) {
        super(props); 
    }

    state = {
        pageNow : 1
    };
    

    clickNum = (i)=> {
        console.log('click nnum', i);
        this.setState({
            pageNow : i
        });
        this.props.onChangePage(i);
        
    };

    render() {
        var items = [];
        var pageCnt = Math.ceil(this.props.totalCnt/this.props.pageSize);
        for (let index = 1; index <= pageCnt; index++) {
            items.push(
                <Pagination.Item key={index} active={this.state.pageNow === index}  onClick={() => this.clickNum(index)} >
                    {index}
                </Pagination.Item>
            )
        }
        return (
            <div>
                <Pagination>{items}</Pagination>
            </div>
        );
    }
}

export default BoardPagination;