import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { withRouter } from 'react-router-dom';



class NewPost extends Component {
    constructor(props){
        super(props);
    }

    state = {
        post: {
            postNo: '',
            title: '',
            categoryNo: '',
            cont: '',
            writer: '',
            regTs: '',
            likeCnt: '',
            commentCnt: '',
            viewCnt: ''
        }
    }

    componentDidMount() {
        if (this.props.mod == "update") {
            console.log(this.props.location);
            console.log(this.props.location.state.post);
            this.setState({
                post: this.props.location.state.post
            });

        }
    }

    onChangeTitle = (e) => {
        var post = this.state.post;
        post.title = e.target.value;
        this.setState({
            title: post
        });
    };

    onChangeCont = (e) => {
        var post = this.state.post;
        post.cont = e.target.value;
        this.setState({
            post: post
        });
    };

    savPost = () => {

        if (this.props.mod == "insert") {
            var data = {
                title : this.state.post.title,
                cont: this.state.post.cont,
                writer: localStorage.getItem('userId')
            };
            console.log(data);
            axios.post('http://localhost:8090/posts/new', data, {
                headers: {Authorization : localStorage.getItem('authorization')}
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    this.props.history.push("/posts/" + res.data.postNo);
                })
        } else if (this.props.mod == "update") {
            if(this.state.post.writer != localStorage.getItem('userId')) {
                alert('작성자만 수정할 수 있습니다.');
                return;
            }
            console.log('update');
            console.log(this.state.post);
            var post = this.state.post;
            axios.put('http://localhost:8090/posts/'+post.postNo, {
                "postNo": post.postNo,
                "title": post.title,
                "categoryNo": post.categoryNo,
                "cont": post.cont,
                "writer": post.writer,
                "regTs": post.regTs,
                "likeCnt": post.likeCnt,
                "commentCnt": post.commentCnt,
                "viewCnt": post.viewCnt
            }
            , {
                headers: {Authorization : localStorage.getItem('authorization')}
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    this.props.history.push("/posts/" + post.postNo);
                })
        }
    };

    render() {
        return (
            <div className="col-md-9">
                <div>
                    <h5 className="card-title">새로운글쓰기</h5>
                </div>
                <input type="title" onChange={this.onChangeTitle} className="form-control" id="exampleInputEmail1" placeholder="제목" defaultValue={this.state.post.title}></input>
                <textarea onChange={this.onChangeCont} style={{ 'width': '100%', "height": "600px" }} defaultValue={this.state.post.cont}>
                </textarea>
                <p><Button onClick={this.savPost} variant="secondary" style={{ 'float': 'right' }}>완료</Button></p>
            </div>
        );
    }
}

export default withRouter(NewPost);