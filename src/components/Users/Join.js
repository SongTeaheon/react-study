import React, { Component } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


class Join extends Component {
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

        axios.post('http://localhost:8090/users/join', this.state)
            .then(res => {
                console.log(res.headers.authorization);
                localStorage.setItem("authorization", res.headers.authorization);
                this.props.history.push("/posts/list/0");
        }).catch(error => {
            console.log(error);
            alert('이미 존재하는 아이디가 있습니다.');
        });
    };


    render() {
        return (
            <div>
                <h2>회원가입 페이지</h2>
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
                        회원가입
                    </Button>
                </div>
            </div>
        );
    }
}

export default withRouter(Join);