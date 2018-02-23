import React from "react";
import {GoogleLoginButton, GithubLoginButton, TwitterLoginButton, FacebookLoginButton} from "react-social-login-buttons";

export default {
    googleProvider, githubProvider, twitterProvider, facebookProvider,
    socialLogin, Buttons, 
    getGoogleButton, getGithubButton, getTwitterButton, getFacebookButton
}

export function googleProvider(){
    return new firebase.auth.GoogleAuthProvider();
}

export function githubProvider(){
    return new firebase.auth.GithubAuthProvider();
}

export function twitterProvider(){
    return new firebase.auth.TwitterAuthProvider();
}

export function facebookProvider(){
    return new firebase.auth.FacebookAuthProvider();
}

export class Buttons extends React.Component {
    constructor(props){
        super(props);

        console.log(props)
    }

    render(){
        console.log("Rendering!")
        return (<div>
            {getGoogleButton(this.props.onError)}
            {getGithubButton(this.props.onError)}
            {getTwitterButton(this.props.onError)}
            {getFacebookButton(this.props.onError)}
        </div>)
    }
}

export function socialLogin(provider, errorCallback){
    return firebase.auth().signInWithPopup(provider).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        errorCallback(error);
    });
}

export function getGoogleButton(error){
    if(login.google){
        return <GoogleLoginButton onClick={socialLogin.bind(socialLogin, googleProvider(), error)}/>;
    }
}

export function getGithubButton(error){
    if(login.github){
        return <GithubLoginButton onClick={socialLogin.bind(socialLogin, githubProvider(), error)}/>;
    }
}

export function getTwitterButton(error){
    if(login.twitter){
        return <TwitterLoginButton onClick={socialLogin.bind(socialLogin, twitterProvider(), error)}/>;
    }
}

export function getFacebookButton(error){
    if(login.twitter){
        return <FacebookLoginButton onClick={socialLogin.bind(socialLogin, facebookProvider(), error)}/>;
    }
}