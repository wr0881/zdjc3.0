import React, { Component } from 'react';
import './dataMonitor.scss';

class DataMonitor extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='dataMonitor-wrapper'>
                <div className="point-map-wrapper">
                    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}><img src="http://attach.bbs.miui.com/forum/201807/17/154537ujxutueesyj3mzt0.jpg" alt="" /></div>
                </div>
                <div className="point-detail-wrapper">
                    <div className="point-detail-operate">
                        <span>时间区间</span>
                    </div>
                    <div className="point-detail-content">
                        <div className="point-detail-table"></div>
                        <div className="point-detail-chart"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DataMonitor;