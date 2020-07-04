import React, { Component } from 'react';
import LeftNav from './LeftNav';
import ContentsList from './ContentsList.js';
import BoardPagination from './BoardPagination';


class Body extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <LeftNav/>
                    </div>
                    <div class="col-md-9">
                        <div>
                            <h5 class="card-title">Card title</h5>
                        </div>
                        <ContentsList/>
                        <BoardPagination/>
                    </div>
                </div>
            </div>    
    );
  }
}

export default Body;