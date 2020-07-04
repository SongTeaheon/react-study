import React, { Component } from 'react';

class LeftNav extends Component {
  render() {
    return (
        <ul class="nav flex-column">
        <li class="nav-item">
            <a class="nav-link active" href="#">전체</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">일상</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">질문</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">모집</a>
        </li>
    </ul>
    );
  }
}

export default LeftNav;