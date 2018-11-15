import React, { Component } from 'react';

class ProjectAlarm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
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
                        <ProjectAlarmItem num='4' name='传感器异常'/>
                        <ProjectAlarmItem num='0' name='终端异常' />
                        <ProjectAlarmItem num='2' name='项目告警' />
                        <ProjectAlarmItem num='-13.345' name='异常变化量' color='#3C4463' />
                        <ProjectAlarmItem num='1.321' name='单次变化量' color='#3C4463' />
                        <ProjectAlarmItem num='18.235' name='累计变化量' color='#3C4463' />
                    </div>
                </div>
            </div>
        );
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