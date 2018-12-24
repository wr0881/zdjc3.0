import React, { Component } from 'react';
import axios from 'axios';
import { Table ,message} from 'antd';
import { Post } from 'common/js/util.js';
import pagedata from 'store/page.js';
import './alarmdetail.scss';

class DeviveInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //search operate
            monitorPointNumber: '',
            alarmStatus: '',
            alarmType: '',
            alarmLevel: '',
            //table
            initcurrent: 1,
            initpageSize: 10,
            alarmDetalData: [],
            pagination: {
                current: 1,
                pageSize: 10,
                size: 'midden',
                total: 0,
                showSizeChanger: true,
                showQuickJumper: true
            }
        }
    }
    render() {
        const columns = [
            // {
            //     title: '所属项目',
            //     dataIndex: 'projectName'
            // },
            {
                title: '所属区间',
                dataIndex: 'sectorName'
            },
            {
                title: '所在测点',
                dataIndex: 'monitorPointNumber'
            },
            {
                title: '采集终端编号',
                dataIndex: 'terminalNumber'
            },
            {
                title: '传感器编号',
                dataIndex: 'sensorNumber'
            },
            {
                title: '告警类型',
                dataIndex: 'alarmType'

            },
            {
                title: '告警等级',
                dataIndex: 'alarmLevel'

            },
            {
                title: '告警内容',
                dataIndex: 'alarmContext'

            },
            {
                title: '告警时间',
                dataIndex: 'createTime'

            },
            {
                title: '告警状态',
                dataIndex: 'alarmStatus'

            },
            {
                title: '操作',
                render: (text, record, index) => {
                    return text.alarmStatus === '已确认' ?
                        <div className='alarmdetail-table-confirmed'>已确认</div>
                        :
                        <div className='alarmdetail-table-unconfirmed' onClick={this.confirmAlarm.bind(this,text.alarmId)}>未确认</div>
                }
            },
        ]
        return (
            <div className="alarmdetail">
                <div className="alarmdetail-operate">
                    <div className="alarmdetail-search-name">
                        <span>测点名称</span>
                        <input type="text" onChange={e => {
                            this.setState({ monitorPointNumber: e.target.value });
                        }} />
                    </div>
                    <div className="alarmdetail-search-type">
                        <span>告警状态</span>
                        <input type="text" onChange={e => {
                            this.setState({ alarmStatus: e.target.value });
                        }} />
                    </div>
                    <div className="alarmdetail-search-type">
                        <span>告警类型</span>
                        <input type="text" onChange={e => {
                            this.setState({ alarmType: e.target.value });
                        }} />
                    </div>
                    <div className="alarmdetail-search-type">
                        <span>告警等级</span>
                        <input type="text" onChange={e => {
                            this.setState({ alarmLevel: e.target.value });
                        }} />
                    </div>
                    <div className="alarmdetail-search-btn" onClick={this.searchBtnClick.bind(this)}>搜索</div>
                </div>
                <div className="alarmdetail-content">
                    <Table
                        columns={columns}
                        dataSource={this.state.alarmDetalData}
                        pagination={this.state.pagination}
                        onChange={this.handleTableChange.bind(this)}
                    />
                </div>
            </div>
        );
    }
    componentDidMount() {
        const { initcurrent, initpageSize } = this.state;
        this.getAlarmDetail(initcurrent, initpageSize);
    }
    handleTableChange(pagination) {
        const { current, pageSize } = pagination;
        this.setState({ pagination });
        this.getAlarmDetail(current, pageSize);
    }
    getAlarmDetail(current, pageSize) {
        const { monitorPointNumber, alarmType, alarmStatus, alarmLevel } = this.state;
        const params = {
            sectorId: pagedata.sector.sectorId,
            monitorPointNumber,
            alarmType,
            alarmStatus,
            alarmLevel,
            current: current,
            pageSize: pageSize
        };
        axios.post('/alarm/querySearchAlarmInfo', Post(params)).then(res => {
            const { code, msg, data } = res.data;
            if (code === 0) {
                const formatData = data.AlarmInfo.map(v => {
                    return { ...v, key: Math.random() };
                });
                this.setState({ alarmDetalData: formatData });
                this.setState({ pagination: { ...this.state.pagination, total: data.total } });
            } else {
                this.setState({ alarmDetalData: [] });
                console.log('/alarm/querySearchAlarmInfo code:', code, msg);
            }
        }).catch(err => { alert(err) });
    }
    searchBtnClick() {
        const { initcurrent, initpageSize } = this.state;
        this.setState({
            pagination: {
                current: 1,
                pageSize: 10,
                size: 'midden',
                total: 0,
                showSizeChanger: true,
                showQuickJumper: true
            }
        }, _ => { this.getAlarmDetail(initcurrent, initpageSize) });
    }
    confirmAlarm(alarmId) {
        axios.get('/alarm/confirmAlarmInfo', {
            params: {
                alarmId
            }
        }).then(res => {
            const { code, msg } = res.data;
            const { current, pageSize } = this.state.pagination;
            if (code === 0) {
                this.getAlarmDetail(current, pageSize);
            } else {
                message.error('告警确认失败');
                console.log('/alarm/queryDeviceInfo code: ', code, msg);
            }
        }).catch(err => { alert(err) });
    }
}

export default DeviveInformation;