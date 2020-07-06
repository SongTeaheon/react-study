import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';



class NewPost extends Component {
    state = {
        title:"제목없음",
        cont:"내용없음",
        writer:"작성자없음",
        category:0
    }

    onChangeTitle = (e) => {
        this.setState({
            title:e.target.value
        });
    };

    onChangeCont = (e) => {
        this.setState({
            cont:e.target.value
        });
    };

    savNewPost = () => {

        axios.post('http://localhost:8090/posts/new',  {
            "title" : this.state.title,
            "cont" : this.state.cont,
            "writer" : this.state.writer
          } )
            .then(res => {
                console.log(res);
                console.log(res.data);
                // this.props.history.push("/posts/list");
            })
    };

    render() {
        return (
            <div className="col-md-9">
                <div>
                    <h5 className="card-title">새로운글쓰기</h5>
                </div>
                <input type="title" onChange={this.onChangeTitle} className="form-control" id="exampleInputEmail1" placeholder="제목"></input>
                <textarea onChange={this.onChangeCont} style={{ 'width': '100%', "height": "600px" }}>
                </textarea>
                <p><Button onClick={this.savNewPost} variant="secondary" style={{ 'float': 'right' }}>완료</Button></p>
            </div>
        );
    }
}

export default NewPost;