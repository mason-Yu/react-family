import React, {Component} from 'react';
import './Login.css'
import hh from '../Images/hh.jpg';
export default class Login extends Component {
    render() {
        return (
            <div className="page-box">
                欢迎登陆
                <img src={hh}/>
            </div>
        )
    }
}