import React, { Component } from 'react';
import Panel from './panel';
import logo from 'common/image/logo.png';
import './header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { islogin } = this.props;
        return (
            <div className='home-header'>
                <div className="home-header-content">
                    <div className="home-header-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="home-header-operate">
                        <Panel
                            style={{ height: '90px' }}
                            title={<span style={{ lineHeight: '90px' }}>云服务</span>}
                        >
                            <div className='yunfuwu'>
                                <div className="yunfuwu-item1">
                                    <div className="yunfuwu-title"><span>监测</span></div>
                                    <div style={{ width: '176px', height: '1px', background: '#ECEAF3' }}></div>
                                    <div className="yunfuwu-content">
                                        <div>桥梁</div>
                                        <div>道路</div>
                                        <div>地铁</div>
                                        <div>隧道</div>
                                        <div>边坡</div>
                                    </div>
                                    <div className="yunfuwu-content">
                                        <div>高支架</div>
                                        <div>铁路</div>
                                        <div>水利</div>
                                    </div>
                                </div>
                                <div className="yunfuwu-item2">
                                    <div className="yunfuwu-title"><span>检测</span></div>
                                    <div style={{ width: '176px', height: '1px', background: '#ECEAF3' }}></div>
                                    <div className="yunfuwu-content">
                                        <div>幕墙</div>
                                        <div>岩土</div>
                                        <div>地基</div>
                                        <div>水利</div>
                                    </div>
                                </div>
                            </div>
                        </Panel>
                        <Panel
                            style={{ height: '90px' }}
                            title={<span style={{ lineHeight: '90px' }}>云产品</span>}
                        >
                            <div className='yunfuwu'>
                                <div className="yunfuwu-item1">
                                    <div className="yunfuwu-title"><span>计算</span></div>
                                    <div style={{ width: '176px', height: '1px', background: '#ECEAF3' }}></div>
                                    <div className="yunfuwu-content">
                                        <div>云服务器</div>
                                        <div>GPU服务器</div>
                                        <div>FPGA服务器</div>
                                        <div>专用宿主服务器</div>
                                        <div>黑石物理服务器</div>
                                    </div>
                                </div>
                                <div className="yunfuwu-item2">
                                    <div className="yunfuwu-title"><span>云数据库 TencentDB</span></div>
                                    <div style={{ width: '176px', height: '1px', background: '#ECEAF3' }}></div>
                                    <div className="yunfuwu-content">
                                        <div>关系型数据库</div>
                                        <div>云数据库Redis</div>
                                        <div>云数据库MongoDB</div>
                                        <div>分布式数据库</div>
                                        <div>数据库一体机TData</div>
                                    </div>
                                </div>
                            </div>
                        </Panel>
                        <Panel
                            style={{ height: '90px' }}
                            title={<span style={{ lineHeight: '90px' }}>产品与支持</span>}
                        >
                            <div className='zhichi'>
                                <div>帮助文档</div>
                                <div>技术支持</div>
                            </div>
                        </Panel>
                    </div>
                    {islogin ?
                        <div className="home-header-login">已登陆</div>
                        :
                        <div className="home-header-login">
                            <Panel
                                style={{ height: '90px' }}
                                title={<Version title='可视化版' />}
                            >
                                <div className='zhichi' style={{ paddingRight: '20px', textAlign: 'right' }}>
                                    <div>可视化版本</div>
                                    <div>平台版本</div>
                                </div>
                            </Panel>
                            <Panel
                                style={{ height: '90px' }}
                                title={<User name='白川芥' type='超级管理员' />}
                            >
                                <div className="user-content">
                                    <div>欢迎登陆</div>
                                    <div className="user-content-item">
                                        <div>个人资料</div>
                                        <div>修改密码</div>
                                        <div>权限管理</div>
                                    </div>
                                    <div>安全退出</div>
                                </div>
                            </Panel>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

function User(props) {
    return (
        <div className="home-user">
            <div className="user-avatar"><img src="" alt="" /></div>
            <div className="user-name">{props.name}</div>
            <div className="user-type">{props.type}</div>
            <div className="user-icon"></div>
        </div>
    )
}

function Version(props) {
    return (
        <div className="version">
            <div className="version-content">
                <div className="version-title">{props.title}</div>
                <div className="version-icon"></div>
            </div>
        </div>
    )
}

export default Header;