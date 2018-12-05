import React, { Component } from 'react';
import axios from 'axios';
import user from 'store/user';
import { Post } from 'common/js/util.js';
import loginImg from 'common/image/登陆.png';
import loginUsernameImg from 'common/image/登陆账号名.png';
import loginPasswordImg from 'common/image/登陆密码.png';
import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'kx',
            password: '123456',
            msg: '',
        }
    }
    render() {
        return (
            <div className='login-wrapper' ref='loginWrapper'>
                <div className="login">
                    <div className="login-img">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="login-content-wrapper">
                        <div className="login-content">
                            <div className="login-title">欢迎登录<br />中大智能监测云平台</div>
                            <div className="login-input-acount">
                                <div className="login-input-name">
                                    <div className="login-input-icon">
                                        <img src={loginUsernameImg} alt="" />
                                    </div>
                                    <input type="text" placeholder='用户名'
                                        onChange={e => {
                                            this.setState({ username: e.target.value });
                                        }}
                                        onFocus={_ => {
                                            this.setState({ msg: '' })
                                        }}
                                    />
                                </div>
                                <div className="login-input-password">
                                    <div className="login-input-icon">
                                        <img src={loginPasswordImg} alt="" />
                                    </div>
                                    <input type="password" placeholder='密码'
                                        onChange={e => {
                                            this.setState({ password: e.target.value });
                                        }}
                                        onFocus={_ => {
                                            this.setState({ msg: '' })
                                        }}
                                        onKeyDown={e => {
                                            if (e.keyCode === 13) {
                                                this.loginBtnClick();
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                            <div className='login-msg'>{this.state.msg}</div>
                            <div className="login-btn"
                                onClick={this.loginBtnClick.bind(this)}
                            >
                                登陆
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    loginBtnClick() {
        const { username, password } = this.state;
        if (username && password) {
            axios.post('/token/login', Post({ userName: username, password }))
                .then(res => {
                    const code = res.data.code;
                    const msg = res.data.msg;
                    const data = res.data.data;
                    if (code === 0) {
                        user.isLogin = true;
                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + data;
                        this.props.history.push('/home');
                    } else {
                        this.setState({ msg });
                    }
                }).catch(err => {
                    alert('/token/login接口错误');
                });
        } else {
            this.setState({ msg: '用户名和密码不能为空' });
        }
    }

}

export default Login;