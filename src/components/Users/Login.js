import React, { Component } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';



class Login extends Component {
    constructor(props){
        super(props);
        if(localStorage.getItem('authorization')){
            alert('이미 로그인되어 있습니다.');
            this.props.history.push("/posts/list/0");
        }
    }
    state = {
        userId: '',
        password: ''
    }

    onChangeId = (e) => {
        this.setState({
            userId: e.target.value
        });
    };

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    inqJoin = () => {
        console.log('inqJoin');
        console.log(this.state);

        axios.post('http://localhost:8090/users/login', this.state)
            .then(res => {
                console.log(res.headers.authorization);
                localStorage.setItem("authorization", res.headers.authorization);
                this.props.history.push("/posts/list/0");
        }).catch(error => {
            console.log(error);
            alert('아이디 또는 패스워드를 확인해주세요');
        });
    };


    render() {
        return (
            <div>
                <h2>로그인 페이지</h2>
                <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">ID</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange = {this.onChangeId}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Password"
                            type = "password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                            onChange = {this.onChangePassword}
                        />
                    </InputGroup>
                    {/* <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button variant="primary" type="submit" onClick={this.inqJoin}>
                        로그인
                    </Button>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);