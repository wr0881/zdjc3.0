import React, { Component } from 'react';
import axios from 'axios';

class ProjectAlarm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alarm: {
                sensorErrorCount: '--',
                terminalErrorCount: '--',
                projectAlarmCount: '--',
                speedChangeErrorCount: '--',
                singleChangeErrorCount: '--',
                totalChangeErrorCount: '--'
            }
        }
    }
    render() {
        const { alarm } = this.state;
        return (
            <div className="projecttype">
                <div className="projecttype-title">
                    <div className='projecttype-title-logo'><img src="" alt="" /></div>
                    <div className="projecttype-title-text">告警事项</div>
                    <div className="projectalarm-title-type">
                        <div className="projectalarm-more">查看详情</div>
                        <div className="projectalarm-more-icon"><img src="" alt="" /></div>
                    </div>
                </div>
                <div className="projecttype-content-wrapper">
                    <div className="projectalarm-content">
                        <ProjectAlarmItem num={alarm.sensorErrorCount} name='传感器异常' />
                        <ProjectAlarmItem num={alarm.terminalErrorCount} name='终端异常' />
                        <ProjectAlarmItem num={alarm.projectAlarmCount} name='项目告警' />
                        <ProjectAlarmItem num={alarm.levelOneCount} name='一级告警数' color='#3C4463' />
                        <ProjectAlarmItem num={alarm.levelTwoCount} name='二级告警数' color='#3C4463' />
                        <ProjectAlarmItem num={alarm.levelThreeCount} name='三级告警数' color='#3C4463' />
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.getAlarm();
    }
    getAlarm() {
        axios.get('/alarm/queryAlarmErrorCounts').then(res => {
            const { code, data } = res.data;
            if (code === 0) {
                this.setState({ alarm: data });
            }
        })
    }
}

function ProjectAlarmItem(props) {
    return (
        <div className='projectalarm-item'>
            <div className="projectalarm-item-num" style={{ color: props.color }}>{props.num}</div>
            <div className="projectalarm-item-name">{props.name}</div>
        </div>
    )
};

export default ProjectAlarm;