import React, { Component } from 'react';
import logo from './communityBank.svg';
import './Login.css';


export default class Login extends Component {
    render() {
        console.log(process.env.REACT_APP_LOGIN)
        return (
            <div> 
                <div className='App'>  
                    <img src={logo} alt=""/>
                    <a href={ process.env.REACT_APP_LOGIN }><button>Login</button></a>
                </div> 
            </div> 
        )
    }
}