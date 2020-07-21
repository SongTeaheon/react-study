import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';

class BoardPagination extends Component {
    constructor(props) {
        super(props); 
    }

    clickNum = (i)=> {
        console.log('click nnum', i);
        this.props.onChangePage(i);
    };

    render() {
        var items = [];
        for (let index = 1; index <= 5; index++) {
            items.push(
                <Pagination.Item key={index} active={index === 1}  onClick={() => this.clickNum(index)} >
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