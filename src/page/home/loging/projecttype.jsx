import React, { Component } from 'react';
import axios from 'axios';
import { Avatar } from 'antd';
import TypeItem from './typeitem/typeitem';
import imgTitle from 'common/image/icon_主页_监测项目.png';

class ProjectType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            monitorStatus: 0,
            projectType: []
        }
    }
    render() {
        const { loading, monitorStatus, projectType } = this.state;
        return (
            <div className="projecttype">
                <div className="projecttype-title-wrapper">
                    <div className="projecttype-title">
                        <div className='projecttype-title-logo'>
                            <Avatar src={imgTitle} style={{ width: '24px', height: '24px' }} />
                        </div>
                        <div className="projecttype-title-text">中大检测</div>
                    </div>
                    <div className="projecttype-title-operate">
                        <div
                            className={monitorStatus ? '' : 'projecttype-title-operate-active'}
                            onClick={_ => {
                                this.setState({ monitorStatus: 0 }, _ => { this.getProjectType() });
                            }}
                        >
                            监测中
                        </div>
                        <div
                            className={monitorStatus ? 'projecttype-title-operate-active' : ''}
                            onClick={_ => {
                                this.setState({ monitorStatus: 1 }, _ => { this.getProjectType() });
                            }}
                        >
                            全部
                        </div>
                    </div>
                </div>
                <div className="projecttype-content-wrapper">
                    <div className="projecttype-content-title">
                        <span>监测项目</span>
                        <div className='line'></div>
                    </div>
                    <div className="projecttype-content">
                        {loading ?
                            <div>加载中...</div> :
                            projectType.map(v => {
                                return <TypeItem key={Math.random()} data={v} />
                            })
                        }
                    </div>
                    <div className="projecttype-content-title">
                        <span>检测项目</span>
                        <div className='line'></div>
                    </div>
                    <div className="projecttype-content">
                        <div><TypeItem isClick={false} data={{itemName:'幕墙'}}/></div>
                        <div><TypeItem isClick={false} data={{itemName:'水泥'}}/></div>
                        <div><TypeItem isClick={false} data={{itemName:'材料'}}/></div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.setState({ monitorStatus: 0 }, _ => { this.getProjectType() });
    }
    getProjectType() {
        const { monitorStatus } = this.state;
        this.setState({ loading: true });
        axios.get('/project/queryProjectType', { params: { type: monitorStatus } }).then(res => {
            const code = res.data.code;
            const data = res.data.data;
            if (code === 0) {
                this.setState({ projectType: data }, _ => {
                    this.setState({ loading: false });
                });
            }
        })
    }
}

export default ProjectType;