import React, { Component } from 'react';
import Card from 'component/Card/Card';
import BasicInformation from 'page/basicInformation/info';
import PeopleInformation from 'page/peopleInformation/info';
import DeviceInformation from 'page/deviceInformation/info';
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
                <div className="breadcrumb">项目管理 / 地铁六号线运行监测项目</div>
                <Card
                    icon={<div style={{ width: '24px', height: '24px' }}></div>}
                    text='地铁六号线运行监测项目'
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
                                        <div></div>
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
                            {title_index === 3 ? <Content title='项目图纸' /> : null}
                            {/* 4,bim */}
                            {title_index === 4 ? <Content title='bim' /> : null}
                            {/* 5,数据监控 */}
                            {title_index === 5 ? <Content title='数据监控' /> : null}
                            {/* 6,视频监控 */}
                            {title_index === 6 ? <Content title='视频监控' /> : null}
                            {/* 7,项目告警 */}
                            {title_index === 7 ? <Content title='项目告警' /> : null}
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
        icon_url: '',
        title: '基本信息'
    },
    {
        icon_url: '',
        title: '人员信息'
    },
    {
        icon_url: '',
        title: '设备信息'
    },
    {
        icon_url: '',
        title: '项目图纸'
    },
    {
        icon_url: '',
        title: 'bim'
    },
    {
        icon_url: '',
        title: '数据监控'
    },
    {
        icon_url: '',
        title: '视频监控'
    },
    {
        icon_url: '',
        title: '项目告警'
    },
    {
        icon_url: '',
        title: '项目文库'
    },
    {
        icon_url: '',
        title: '操作日志'
    }
];

function Content(props) {
    return <div>{props.title}</div>
}

export default Detail;