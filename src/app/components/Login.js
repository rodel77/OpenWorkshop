import React from "react";

import {Row, Form, FormControl, FormGroup, Label, Input, Button, Popover, PopoverBody, PopoverHeader, Col, Alert} from "reactstrap";

import Modal from "./Modal";

import {Buttons} from "../internal/SocialLogin";

export default class Login extends React.Component {
    
    constructor(props){
        super(props);

        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.doLogin = this.doLogin.bind(this);
        this.socialError = this.socialError.bind(this);

        this.state = {
            email: "",
            emailValid: false,
            password: "",
            passwordValid: false,
            error: ""
        };
    }

    validateEmail(e){
        var email = e.target.value.trim();
        this.setState({
            email: email,
            emailValid: email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g)!=null
        });
    }

    validatePassword(e){
        var password = e.target.value.trim();
        this.setState({
            password: password,
            passwordValid: password.length!=0
        });
    }

    doLogin(e){
        e.preventDefault();

        if(this.state.passwordValid && this.state.emailValid){
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
                this.setState({
                    error: error.message
                });
            });
        }
    }

    socialError(error){
        this.setState({
            error: error.message
        });
    }

    componentDidMount(){
        this.setState({
            emailValid: false,
            passwordValid: false
        })
    }

    render(){
        var alert;

        if(this.state.error.length!=0){
            alert = <Alert color="danger">{locale.auth.error+this.state.error}</Alert>
        }

        return (
            <Modal>
                <h1 className="display-3">{locale.navbar.login}</h1>
                <br/>
                <br/>

                <Form onSubmit={this.doLogin}>
                    <Row>
                        <Col sm={6}>
                                <FormGroup row>
                                    <Label for="email" sm={2}>{locale.auth.email}</Label>

                                    <Col sm={10}>
                                        <Input type="email" name="email" id="email" placeholder="example@example.com" valid={this.state.emailValid} onChange={this.validateEmail} autoComplete="email"/>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="password" sm={2}>{locale.auth.password}</Label>

                                    <Col sm={10}>
                                        <Input type="password" name="password" id="password" placeholder="********" valid={this.state.passwordValid} onChange={this.validatePassword} autoComplete="password"/>
                                    </Col>
                                </FormGroup>
                                {alert}
                                <Button type="submit" color="success">{locale.navbar.login}</Button>
                        </Col>

                        <Col sm={6}>
                            <Buttons onError={this.socialError}/>
                        </Col>
                    </Row>
                </Form>

            </Modal>
        );
    }
}