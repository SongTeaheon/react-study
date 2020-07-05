import React, { Component } from 'react';
import LeftNav from './LeftNav';
import ContentsList from './ContentsList.js';
import BoardPagination from './BoardPagination';


class Body extends Component {
    state = {
        selected_category : 0
    };

    selCategory = (ctgNo) => {
        this.setState({
            selected_category : ctgNo
        });
    };
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <LeftNav onClickCtg={this.selCategory}/>
                    </div>
                    <div className="col-md-9">
                        <div>
                            <h5 className="card-title">Card title</h5>
                        </div>
                        <ContentsList categoryNo = {this.state.selected_category}/>
                        <BoardPagination/>
                    </div>
                </div>
            </div>    
    );
  }
}

export default Body;