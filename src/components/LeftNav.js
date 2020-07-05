import React, { Component } from 'react';
import { callExpression } from '@babel/types';

class LeftNav extends Component {
    render() {
        var categoryNm = ['전체', '일상', '질문', '모집'];

        return (
            <ul className="nav flex-column">
                {categoryNm.map((nm, index) =>
                    <li className="nav-item">
                        <a className="nav-link active" onClick={function (e) {
                            e.preventDefault();
                            this.props.onClickCtg(index);
                        }.bind(this)}>{nm}</a>
                    </li>)}
            </ul>
        );
    }
}

export default LeftNav;