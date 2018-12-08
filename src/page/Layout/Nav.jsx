import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { className } = this.props;
        return (
            <div className={className}>
                <div className="nav-title">地铁自动化监测</div>
                <NavLink
                    to='/project/overview'
                    activeClassName='nav-item-active'
                >
                    <div className="nav-item">
                        <div className="nav-item-icon"></div>
                        <div className="nav-item-title">概览</div>
                    </div>
                </NavLink>
                <NavLink
                    to='/project/manage'
                    activeClassName='nav-item-active'
                >
                    <div className="nav-item">
                        <div className="nav-item-icon"></div>
                        <div className="nav-item-title">项目管理</div>
                    </div>
                </NavLink>
                <div className="nav-item">
                    <div className="nav-item-icon"></div>
                    <div className="nav-item-title">视频监控</div>
                </div>
                <NavLink
                    to='/project/bim'
                    activeClassName='nav-item-active'
                >
                    <div className="nav-item">
                        <div className="nav-item-icon"></div>
                        <div className="nav-item-title">BIM</div>
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default Nav;