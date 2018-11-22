import React, { Component } from 'react';
import { Table } from 'antd';
import './info.scss';

class DeviveInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="deviceInformation">
                <div className="deviceInformation-operate">
                    <div className="deviceInformation-search-name">
                        <span>设备名称</span>
                        <input type="text" />
                    </div>
                    <div className="deviceInformation-search-type">
                        <span>设备类型</span>
                        <input type="text" />
                    </div>
                    <div className="deviceInformation-search-btn">搜索</div>
                </div>
                <div className="deviceInformation-content">
                    <Table columns={columns} dataSource={data} pagination={false} />
                </div>
            </div>
        );
    }
}

const columns = [
    {
        title: '设备编号',
        dataIndex: 'deviveId'
    },
    {
        title: '设备名称',
        dataIndex: 'deviveName'
    },
    {
        title: '设备类型',
        dataIndex: 'deviveType'
    },
    {
        title: '位置信息',
        dataIndex: 'deviveLocation'
    },
    {
        title: '运转状态',
        dataIndex: 'deviveStatus'
    },
]

const data = [
    {
        key: Math.random(),
        deviveId: 6734585545,
        deviveName: '热点采集器',
        deviveType: '光学传感器',
        deviveLocation: '经度12 纬度123',
        deviveStatus: '正常'
    },
    {
        key: Math.random(),
        deviveId: 6734585546,
        deviveName: '热点采集器',
        deviveType: '光学传感器',
        deviveLocation: '经度12 纬度123',
        deviveStatus: '正常'
    },
    {
        key: Math.random(),
        deviveId: 6734585547,
        deviveName: '热点采集器',
        deviveType: '光学传感器',
        deviveLocation: '经度12 纬度123',
        deviveStatus: '正常'
    },
    {
        key: Math.random(),
        deviveId: 6734585548,
        deviveName: '热点采集器',
        deviveType: '光学传感器',
        deviveLocation: '经度12 纬度123',
        deviveStatus: '正常'
    },
]

export default DeviveInformation;