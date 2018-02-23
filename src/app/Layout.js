import React from "react";

import Navigation from "./components/Navigation";

import Signin from "./components/Signin";
import Login from "./components/Login";
import Overview from "./components/Overview";

import PathResolver from "./internal/PathResolver";

export default class Layout extends React.Component{
    // User logged or endpoint changed
    // componentWillReceiveProps(newProps){
    //     if(newProps.user){
            
    //     }
    // }

    render(){
        var body;

        // @Warning: Move this thing to "componentWillMov"
        switch(this.props.endpoint){
            case "login":
                if(this.props.user){
                    body = <Overview/>;
                    PathResolver.resolveMain(".");
                    this.props.changeEndpoint("main");
                }else{
                    body = <Login/>
                }
                break;
            case "signin":
                if(this.props.user){
                    body = <Overview/>;
                    PathResolver.resolveMain(".");
                    this.props.changeEndpoint("main");
                }else{
                    body = <Signin/>
                }
                break;
            default:
                body = <Overview/>;
                break;
        }

        return (
            <div>
                <Navigation {...this.props}/>
                {body}
            </div>
        );
    }
}