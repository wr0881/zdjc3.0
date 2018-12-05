import React, { Component } from 'react';
import TypeItem from './typeitem/typeitem';
import axios from 'axios';

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
                <div className="projecttype-title">
                    <div className='projecttype-title-logo'><img src="" alt="" /></div>
                    <div className="projecttype-title-text">中大检测</div>
                    <div className="projecttype-title-type">
                        <div
                            className={monitorStatus ? '' : 'projecttype-title-type-active'}
                            onClick={_ => {
                                this.setState({ monitorStatus: 0 }, _ => { this.getProjectType() });
                            }}
                        >
                            监测中
                        </div>
                        <div
                            className={monitorStatus ? 'projecttype-title-type-active' : ''}
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
                        <div><TypeItem isClick={false} /></div>
                        <div><TypeItem isClick={false} /></div>
                        <div><TypeItem isClick={false} /></div>
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