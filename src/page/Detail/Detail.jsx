import React, { Component } from 'react';
import Card from 'component/Card/Card';
import BasicInformation from 'page/basicInformation/info';
import PeopleInformation from 'page/peopleInformation/info';
import DeviceInformation from 'page/deviceInformation/info';
import BluePrint from 'page/blueprint/blueprint';
import DataMonitor from 'page/dataMonitor/dataMonitor';
import AlarmDetail from 'page/alarmdetail/alarmdetail';
import pagedata from 'store/page.js';

import manage from 'common/image/manage.png';
import icon_1 from 'common/image/基本信息.png';
import icon_2 from 'common/image/人员信息.png';
import icon_3 from 'common/image/设备信息.png';
import icon_4 from 'common/image/项目图纸.png';
import icon_5 from 'common/image/bim.png';
import icon_6 from 'common/image/数据监控.png';
import icon_7 from 'common/image/视频监控.png';
// import icon_8 from 'common/image/危险源.png';
import icon_9 from 'common/image/项目告警.png';
import icon_10 from 'common/image/项目文库.png';
import icon_11 from 'common/image/操作日志.png';

import './Detail.scss';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title_index: 0
        }
    }
    render() {
        const { title_index } = this.state;
        return (
            <div className="detail">
                <div className="breadcrumb">
                    <span style={{ cursor: 'pointer' }}
                        onClick={_ => { this.props.history.push('/project/manage') }}
                    >项目管理</span>
                    &nbsp;/
                    {`${pagedata.sector.sectorName}`}
                </div>
                <Card
                    icon={<div style={{ width: '24px', height: '24px' }}><img src={manage} alt=""/></div>}
                    text={`${pagedata.sector.sectorName}`}
                >
                    <div className="detail-content-wrapper">
                        <div className="detail-content-title">
                            {title.map((v, i) => {
                                return (
                                    <div
                                        key={Math.random()}
                                        className={`detail-content-title-item ${title_index === i ? 'detail-content-title-item-active' : ''}`}
                                        onClick={_ => { this.setState({ title_index: i }) }}
                                    >
                                        <div><img src={v.icon_url} alt=""/></div>
                                        <div>{v.title}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="detail-content">
                            {/* 0,基本信息 */}
                            {title_index === 0 ? <BasicInformation /> : null}
                            {/* 1,人员信息 */}
                            {title_index === 1 ? <PeopleInformation /> : null}
                            {/* 2,设备信息 */}
                            {title_index === 2 ? <DeviceInformation /> : null}
                            {/* 3,项目图纸 */}
                            {title_index === 3 ? <BluePrint /> : null}
                            {/* 4,bim */}
                            {title_index === 4 ? <Content title='bim' /> : null}
                            {/* 5,数据监控 */}
                            {title_index === 5 ? <DataMonitor /> : null}
                            {/* 6,视频监控 */}
                            {title_index === 6 ? <Content title='视频监控' /> : null}
                            {/* 7,项目告警 */}
                            {title_index === 7 ? <AlarmDetail /> : null}
                            {/* 8,项目文库 */}
                            {title_index === 8 ? <Content title='项目文库' /> : null}
                            {/* 9,操作日志 */}
                            {title_index === 9 ? <Content title='操作日志' /> : null}
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

const title = [
    {
        icon_url: icon_1,
        title: '基本信息'
    },
    {
        icon_url: icon_2,
        title: '人员信息'
    },
    {
        icon_url: icon_3,
        title: '设备信息'
    },
    {
        icon_url: icon_4,
        title: '项目图纸'
    },
    {
        icon_url: icon_5,
        title: 'bim'
    },
    {
        icon_url: icon_6,
        title: '数据监控'
    },
    {
        icon_url: icon_7,
        title: '视频监控'
    },
    {
        icon_url: icon_9,
        title: '项目告警'
    },
    {
        icon_url: icon_10,
        title: '项目文库'
    },
    {
        icon_url: icon_11,
        title: '操作日志'
    }
];

function Content(props) {
    return <div>{props.title}</div>
}

export default Detail;