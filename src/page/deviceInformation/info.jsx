import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import pagedata from 'store/page.js';
import './info.scss';

const columns = [
    {
        title: '终端编号',
        dataIndex: 'terminalNumber'
    },
    {
        title: '终端名称',
        dataIndex: 'terminalName'
    },
    {
        title: '终端型号',
        dataIndex: 'terminalModel'
    },
    {
        title: '终端状态',
        dataIndex: 'terminalStatus'
    },
    {
        title: '传感器',
        dataIndex: 'deviveStatus'

    },
]

class DeviveInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //search operate
            deviceName: '',
            deviceType: '',
            //table
            initcurrent: 1,
            initpageSize: 10,
            terminalData: [],
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
        return (
            <div className="deviceInformation">
                <div className="deviceInformation-operate">
                    <div className="deviceInformation-search-name">
                        <span>设备名称</span>
                        <input type="text" onChange={e => {
                            this.setState({ deviceName: e.target.value });
                        }} />
                    </div>
                    <div className="deviceInformation-search-type">
                        <span>设备类型</span>
                        <input type="text" onChange={e => {
                            this.setState({ deviceType: e.target.value });
                        }} />
                    </div>
                    <div className="deviceInformation-search-btn" onClick={this.searchBtnClick.bind(this)}>搜索</div>
                </div>
                <div className="deviceInformation-content">
                    <Table
                        columns={columns}
                        dataSource={this.state.terminalData}
                        pagination={this.state.pagination}
                        onChange={this.handleTableChange.bind(this)}
                    />
                </div>
            </div>
        );
    }
    componentDidMount() {
        const { initcurrent, initpageSize } = this.state;
        this.getDeviceInformation(initcurrent, initpageSize);
    }
    handleTableChange(pagination) {
        const { current, pageSize } = pagination;
        this.setState({ pagination });
        this.getDeviceInformation(current, pageSize);
    }
    getDeviceInformation(current, pageSize) {
        const { deviceName, deviceType } = this.state;
        const params = {
            sectorId: pagedata.sector.sectorId,
            terminalName: deviceName,
            terminalModel: deviceType,
            pageNum: current,
            pageSize: pageSize
        };
        axios.get('/device/queryDeviceInfo', {
            params
        }).then(res => {
            const { code, msg, data } = res.data;
            if (code === 0) {
                const formatData = data.terminals.map(v => {
                    return { ...v, key: Math.random() };
                });
                this.setState({ terminalData: formatData });
                this.setState({ pagination: { ...this.state.pagination, total: data.totalPage } });
            } else {
                this.setState({ terminalData: [] });
                console.log('/alarm/queryDeviceInfo code: ', code, msg);
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
        }, _ => { this.getDeviceInformation(initcurrent, initpageSize) });
    }
}

export default DeviveInformation;