import React, { Component } from 'react';

class Jumbotron extends Component {
  render() {
    return (
        <div class="container-fluid">
          <div class="jumbotron">
            <h2 class="text-center">프론트 연습 프로젝트를 소개합니다</h2>
            <p class="text-center">첫 프론트 연습입니다.</p>
            <p class="text-center"><a class="btn btn-primary btn-lg" href="#" role="button">메인 페이지로 이동</a></p>
          </div>
        </div>
    );
  }
}

export default Jumbotron;