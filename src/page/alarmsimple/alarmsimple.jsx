import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import Header from 'component/header/header';
import './alarmsimple.scss';

const columns = [
    {
        title: '项目名称',
        dataIndex: 'projectName'
    },
    {
        title: '区间名称',
        dataIndex: 'sectorName'
    },
    {
        title: '告警总数',
        dataIndex: 'alarmTotal'
    },
    {
        title: '一级告警数',
        dataIndex: 'level1'
    },
    {
        title: '二级告警数',
        dataIndex: 'level2'
    },
    {
        title: '三级告警数',
        dataIndex: 'level3'
    },
    {
        title: '终端异常数',
        dataIndex: 'tError'
    },
    {
        title: '传感器异常数',
        dataIndex: 'sError'
    },
];

class AlarmSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initcurrent: 1,
            initpageSize: 10,
            alarm: [],
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
            <div className='alarmsimple'>
                <Header />
                <div className="alarmsimple-table-wrapper">
                    <Table
                        columns={columns}
                        dataSource={this.state.alarm}
                        size='middle'
                        bordered
                        pagination={this.state.pagination}
                        onChange={this.handleTableChange.bind(this)}
                    />
                </div>
            </div>
        );
    }
    componentDidMount() {
        const { initcurrent, initpageSize } = this.state;
        this.getAlarmSimple(initcurrent, initpageSize);
    }
    handleTableChange(pagination) {
        const { current, pageSize } = pagination;
        this.setState({ pagination });
        this.getAlarmSimple(current, pageSize);
    }
    getAlarmSimple(current, pageSize) {
        axios.get('/alarm/queryAlarmCount', {
            params: {
                current,
                pageSize
            }
        }).then(res => {
            const { code, msg, data } = res.data;
            if (code === 0) {
                const formatData = this.getTableFormat(data.AlarmCounts);
                this.setState({ alarm: formatData });
                this.setState({ pagination: { ...this.state.pagination, total: data.total } });
            } else {
                console.log('/alarm/queryAlarmCount code: ', code, msg);
            }
        }).catch(err => { alert(err) });
    }
    getTableFormat(ary) {
        return ary.map(v => {
            return { ...v, key: Math.random() }
        });
    }
}

export default AlarmSimple;