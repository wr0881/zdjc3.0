import React, { Component } from 'react';

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
                <div className="nav-item nav-item-active">
                    <div className="nav-item-icon"></div>
                    <div className="nav-item-title">概览</div>
                </div>
                <div className="nav-item">
                    <div className="nav-item-icon"></div>
                    <div className="nav-item-title">项目管理</div>
                </div>
                <div className="nav-item">
                    <div className="nav-item-icon"></div>
                    <div className="nav-item-title">视频监控</div>
                </div>
                <div className="nav-item">
                    <div className="nav-item-icon"></div>
                    <div className="nav-item-title">BIM</div>
                </div>
            </div>
        );
    }
}

export default Nav;