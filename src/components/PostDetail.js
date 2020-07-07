import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { withRouter } from 'react-router-dom';



class PostDetail extends Component {
    state = {
        post: {

        }
    };

    inqSinglePostData = () => {
        axios.get('http://localhost:8090/posts/' + this.props.match.params.id)
            .then(res => {
                console.log(res);
                this.setState({
                    post: res.data
                });
            });
    };

    removePost = () => {
        axios.delete('http://localhost:8090/posts/' + this.props.match.params.id)
            .then(res => {
                console.log(res);
                this.props.onDeleteComple(0);
                this.props.history.push("/posts/list");
            });
    }

    updatePost = () => {
        this.props.history.push(
            {
                pathname: "/posts/"+this.props.match.params.id + "/mod",
                state: { post: this.state.post }
              });
    }
    
    componentDidMount() {
        this.inqSinglePostData();
    };

    render() {
        const params = this.props.match.params;
        console.log('match', params.id);
        return (
            <div className="col-md-9">
                <div>
                    <h5 className="card-title">PostDetail</h5>
                </div>
                <div>
                    <h2>{this.state.post.title}</h2>
                    <h6 style={{ 'textAlign': 'right' }}>{this.state.post.writer}  {this.state.post.regTs}</h6>
                </div>
                <div>
                    <p style={{ 'width': '100%', "height": "600px", "borderStyle": "solid" }}>
                        {this.state.post.cont}
                    </p>
                </div>
                <p>
                    <Button onClick={this.removePost} variant="secondary" style={{ 'float': 'right' }}>삭제</Button>
                    <Button onClick={this.updatePost} variant="secondary" style={{ 'float': 'right' }}>수정</Button>
                </p>
            </div>
        );
    }
}

export default withRouter(PostDetail);