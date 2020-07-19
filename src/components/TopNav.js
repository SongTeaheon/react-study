import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class TopNav extends Component {

  logout = (e) => {
    if(localStorage.getItem('authorization')){
      alert('로그아웃 합니다.');
      localStorage.removeItem('authorization');
      this.props.history.push("/posts/list/0");
    }else{
      alert('이미 로그아웃된 상태입니다.');
    }
    
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/posts/list/0">퇴근 후 뭐하니?</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/users/login">로그인 <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/users/join">회원가입</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href = "#" onClick={this.logout}>로그아웃 <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(TopNav);