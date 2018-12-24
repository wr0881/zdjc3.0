import React, { Component } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Card from 'component/Card/Card';
import BasicInformation from 'page/basicInformation/info';
import PeopleInformation from 'page/peopleInformation/info';
import DeviceInformation from 'page/deviceInformation/info';
import BluePrint from 'page/blueprint/blueprint';
import DataMonitor from 'page/dataMonitor/dataMonitor';
import AlarmDetail from 'page/alarmdetail/alarmdetail';
import pagedata from 'store/page.js';
import manage from 'common/image/manage.png';
import './Detail.scss';

const title = [
    {
        title: '基本信息',
        enTitle: 'BasicInformation',
        icon_url: require('common/image/基本信息.png'),
        icon_url_active: require('common/image/基本信息2.png'),
        component: BasicInformation,
    },
    {
        title: '人员信息',
        enTitle: 'PeopleInformation',
        icon_url: require('common/image/人员信息.png'),
        icon_url_active: require('common/image/人员信息2.png'),
        component: PeopleInformation,
    },
    {
        title: '设备信息',
        enTitle: 'DeviceInformation',
        icon_url: require('common/image/设备信息.png'),
        icon_url_active: require('common/image/设备信息2.png'),
        component: DeviceInformation,
    },
    {
        title: '项目图纸',
        enTitle: 'BluePrint',
        icon_url: require('common/image/项目图纸.png'),
        icon_url_active: require('common/image/项目图纸2.png'),
        component: BluePrint,
    },
    {
        title: '数据监控',
        enTitle: 'DataMonitor',
        icon_url: require('common/image/数据监控.png'),
        icon_url_active: require('common/image/数据监控2.png'),
        component: DataMonitor,
    },
    {
        title: '项目告警',
        enTitle: 'AlarmDetail',
        icon_url: require('common/image/项目告警.png'),
        icon_url_active: require('common/image/项目告警2.png'),
        component: AlarmDetail,
    }
];

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const curUrl = this.props.match.url;
        const activeUrl = this.props.location.pathname;
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
                    icon={<div style={{ width: '24px', height: '24px' }}><img src={manage} alt="" /></div>}
                    text={`${pagedata.sector.sectorName}`}
                >
                    <div className="detail-content-wrapper">
                        <div className="detail-content-title">
                            {title.map(v => {
                                return (
                                    <NavLink
                                        key={Math.random()}
                                        to={`${curUrl}/${v.enTitle}`}
                                        activeClassName='detail-content-title-item-active'
                                    >
                                        <div
                                            className='detail-content-title-item'
                                        >
                                            <div><img src={`${curUrl}/${v.enTitle}`===activeUrl?`${v.icon_url_active}`:`${v.icon_url}`} alt=''/></div>
                                            <div>{v.title}</div>
                                        </div>
                                    </NavLink>
                                )
                            })}
                        </div>
                        <div className="detail-content">
                            <Switch>
                                {title.map(v => {
                                    return <Route key={Math.random()} exact path={`${curUrl}/${v.enTitle}`} component={v.component} />
                                })}
                                <Redirect to={`${curUrl}/BasicInformation`} />
                            </Switch>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default Detail;