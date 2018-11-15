import React, { Component } from 'react';
import TypeItem from './typeitem/typeitem';

class ProjectType extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="projecttype">
                <div className="projecttype-title">
                    <div className='projecttype-title-logo'><img src="" alt="" /></div>
                    <div className="projecttype-title-text">中大检测</div>
                    <div className="projecttype-title-type">
                        <div className='projecttype-title-type-active'>监测中</div>
                        <div>全部</div>
                    </div>
                </div>
                <div className="projecttype-content-wrapper">
                    <div className="projecttype-content-title">
                        <span>监测项目</span>
                        <div className='line'></div>
                    </div>
                    <div className="projecttype-content">
                        <div><TypeItem ismonitor={true} /></div>
                        <div><TypeItem /></div>
                        <div><TypeItem /></div>
                        <div><TypeItem /></div>
                        <div><TypeItem ismonitor={true}  /></div>
                        <div><TypeItem /></div>
                    </div>
                    <div className="projecttype-content-title">
                        <span>检测项目</span>
                        <div className='line'></div>
                    </div>
                    <div className="projecttype-content">
                        <div><TypeItem /></div>
                        <div><TypeItem /></div>
                        <div><TypeItem /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectType;