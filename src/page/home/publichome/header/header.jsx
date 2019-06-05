import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import logo from 'common/image/logo.png';
import './header.scss';

@withRouter
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowUserInfo: false,
            isShowChangePwsd: false,
            userInfo: {},
            msg: ''
        }
    }
    render() {
        const { islogin } = this.props;
        return (
            <div className='home-header'>
                <div className="home-header-content">
                    <div className="home-header-logo">
                        <img src={logo} style={{ width: '100%', height: '100%' }} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;