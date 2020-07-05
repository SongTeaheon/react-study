import React, { Component } from 'react';

class Jumbotron extends Component {
  render() {
    return (
        <div className="container-fluid">
          <div className="jumbotron">
            <h2 className="text-center">프론트 연습 프로젝트를 소개합니다</h2>
            <p className="text-center">첫 프론트 연습입니다.</p>
            <p className="text-center"><a className="btn btn-primary btn-lg" href="#" role="button">메인 페이지로 이동</a></p>
          </div>
        </div>
    );
  }
}

export default Jumbotron;