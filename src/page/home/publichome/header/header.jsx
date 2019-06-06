import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import logo from 'common/image/logo.png';
import qiehuan from 'common/image/切换版本.png';
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
                    {/* {islogin ?
                        <div className="home-header-login">已登陆</div>
                        :
                        <div className="home-header-login">
                            <div
                                className="home-header-nav"
                            >
                                <div className="home-header-nav-text">
                                    <div className="version">
                                        <div className="version-content">
                                            <div className="version-title">平台版本</div>
                                            <div className="version-icon"><img src={qiehuan} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-header-nav-panel">
                                    <div className='zhichi' style={{ paddingRight: '20px', textAlign: 'right' }}>
                                        <div>可视化版本</div>
                                        <div>平台版本</div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="home-header-nav"
                            >
                                <div className="home-header-nav-text">
                                    <div className="home-user">
                                        <div onClick={_ => { this.props.history.push('/login') }}>登录</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    } */}
                </div>
            </div>
        )
    }
}

export default Header;