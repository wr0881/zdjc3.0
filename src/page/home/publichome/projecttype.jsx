import React, { Component } from 'react';
import { Avatar } from 'antd';
import imgTitle from 'common/image/icon_主页_监测项目.png';

import TypeBox from './typebox/typebox';

class allProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    render() {
        return (
            <div className="allProject">
                <div className="allProject-title-wrapper">
                    <div className="allProject-title">
                        <div className='allProject-title-logo'>
                            <Avatar src={imgTitle} style={{ width: '24px', height: '24px' }} />
                        </div>
                        <div className="allProject-title-text">中大检测</div>
                    </div>
                    <div className="allProject-title-operate">
                        <div
                        // className='allProject-title-operate-active'
                        >
                            全部
                        </div>
                    </div>
                </div>
                <div className="allProject-content-wrapper" style={{ height: '300px' }}>
                    
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.setState({ monitorStatus: 0 });
    }
}

export default allProject;