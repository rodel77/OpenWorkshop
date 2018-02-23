import React from "react";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, 
    Button,
    ButtonGroup } from 'reactstrap';

import PathResolver from "../internal/PathResolver";

export default class Navigation extends React.Component{
    constructor(props){
      super(props);
    
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false,
      };

      this.goLogin = this.goLogin.bind(this);
      this.goSignin = this.goSignin.bind(this);
      this.goMain = this.goMain.bind(this);
      this.doLogout = this.doLogout.bind(this);
    }
    
    toggle(){
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    goLogin(e){
      e.preventDefault();
      if(this.props.endpoint!="login"){
        PathResolver.resolveMain("login");
        this.props.changeEndpoint("login");
      }
    }

    goSignin(e){
      e.preventDefault();
      if(this.props.endpoint!="signin"){
        PathResolver.resolveMain("signin");
        this.props.changeEndpoint("signin");
      }
    }

    goMain(e){
      e.preventDefault();
      if(this.props.endpoint!="main"){
        PathResolver.resolveMain(".");
        this.props.changeEndpoint("main");
      }
    }

    doLogout(e){
      e.preventDefault();
      firebase.auth().signOut().then(function(){

      }).catch(function(error){

      });
    }

    render(){
        console.log(this.props.user);

        var authButtons;

        if(this.props.user==null){
          authButtons = <Nav className="ml-auto" navbar>
                          <NavItem>
                            <ButtonGroup>
                              <Button color="secundary" onClick={(e)=>{this.goLogin(e)}}>
                                {locale.navbar.login}
                              </Button>
                              <Button color="primary" onClick={(e)=>{this.goSignin(e)}}>
                                {locale.navbar.signin}
                              </Button>
                            </ButtonGroup>
                          </NavItem>
                        </Nav>;
        }else{
          authButtons = <Nav className="ml-auto" navbar>
                          <NavItem>
                            <NavLink>
                              <Button color="danger" onClick={this.doLogout}>
                                {locale.navbar.logout}
                              </Button>
                            </NavLink>
                          </NavItem>
                        </Nav>;
        }

        return (
            <div>
              <Navbar color="faded" light expand="md">
                <NavbarBrand href="#" onClick={(e)=>{this.goMain(e)}}>{locale.navbar.title}</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  {authButtons}
                </Collapse>
              </Navbar>
            </div>
          );
    }
}