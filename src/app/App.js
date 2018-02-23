import React from "react";

import Layout from "./Layout";
import PathResolver from "./internal/PathResolver";

export default class View extends React.Component {
    constructor(props) {
        super(props);

        this.changeEndpoint = this.changeEndpoint.bind(this);

        this.state = {
            endpoint: "main",
            user: null,
            changeEndpoint: this.changeEndpoint,
        }

        var endpoints = PathResolver.getEndpoints();

        if(endpoints.length!=0){
            var endpoint = endpoints.pop();

            switch(endpoint) {
                case "login":
                case "signin":
                case "new-resource":
                    console.log(endpoint+" endpoint");
                    this.state.endpoint = endpoint;
                    break;
                default:
                    console.log("main endpoint");
                    break;
            }
        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user) => {
            console.log("User state changed...");
            this.setState({
                user: user
            });
        });
    }

    changeEndpoint(newEndpoint){
        this.setState({
            endpoint: newEndpoint
        });
    }

    render(){
        return <Layout {...this.state}/>;
    }
}