import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class LeftNav extends Component {
    render() {
        var categoryNm = ['전체', '일상', '질문', '모집'];

        return (
            <ul className="nav flex-column">
                {categoryNm.map((nm, index) =>
                    <li className="nav-item" key={index}>
                        <NavLink to="/posts/list" role="button" onClick={function (e) {
                            this.props.onClickCtg(index);
                        }.bind(this)}>{nm}</NavLink>
                    </li>)}
            </ul>
        );
    }
}

export default LeftNav;