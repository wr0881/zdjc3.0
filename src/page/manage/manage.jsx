import React, { Component } from 'react';
import { Table } from 'antd';
import Card from 'component/Card/Card';
import Button from 'component/Button/Button';
import Input from 'component/Input/Input';
import './manage.scss';

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    // getCheckboxProps: record => ({
    //     disabled: record.test1[0] === '地铁6号线运行监测', // Column configuration not to be checked
    //     name: record.name,
    // }),
};

class Manage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        const renderContent = (value, row, index) => {
            return (
                <div>
                    {value.map(v => {
                        return <div key={Math.random()}>{v}</div>;
                    })}
                </div>
            )
        };

        const renderKContent = (value, row, index) => {
            return (
                <div>
                    {value.map(v => {
                        return <div
                            key={Math.random()}
                            className='k-select'
                            onClick={_ => { this.props.history.push('/project/manage/detail') }}
                        >{v}</div>;
                    })}
                </div>
            )
        };

        const columns = [
            {
                title: 'ID/项目名',
                dataIndex: 'test1',
            },
            {
                title: 'K段',
                dataIndex: 'test2',
                render: renderKContent
            },
            {
                title: '类型',
                dataIndex: 'test3',
                render: renderContent
            },
            {
                title: '监控',
                dataIndex: 'test4',
                render: renderContent
            },
            {
                title: '状态',
                dataIndex: 'test5',
                render: renderContent
            },
            {
                title: '地点',
                dataIndex: 'test6',
                render: renderContent
            },
            {
                title: '一级告警',
                dataIndex: 'test7',
                render: renderContent
            },
            {
                title: '二级告警',
                dataIndex: 'test8',
                render: renderContent
            },
            {
                title: '三级告警',
                dataIndex: 'test9',
                render: renderContent
            },
            {
                title: '设备告警',
                dataIndex: 'test10',
                render: renderContent
            },
            {
                title: '开始时间',
                dataIndex: 'test11',
                render: renderContent
            },
            {
                title: '结束时间',
                dataIndex: 'test12',
                render: renderContent
            },
        ];

        const data = [
            {
                key: Math.random(),
                test1: ['地铁6号线运行监测'],
                test2: ['麓云路站', '汽车西站'],
                test3: ['车站', '区间'],
                test4: ['0', '1'],
                test5: ['正常', '异常'],
                test6: ['长沙路松路口', '长沙东方红路口'],
                test7: ['0', '2'],
                test8: ['0', '0'],
                test9: ['0', '0'],
                test10: ['0', '0'],
                test11: ['2018-9-23 15:53', '2018-9-23 15:53'],
                test12: ['2018-9-23 15:53', '2018-9-23 15:53'],
            },
            {
                key: Math.random(),
                test1: ['地铁3号线运行监测'],
                test2: ['麓云路站', '汽车西站'],
                test3: ['车站', '区间'],
                test4: ['0', '1'],
                test5: ['麓云路站', '汽车西站'],
                test6: ['麓云路站', '汽车西站'],
                test7: ['麓云路站', '汽车西站'],
                test8: ['麓云路站', '汽车西站'],
                test9: ['麓云路站', '汽车西站'],
                test10: ['麓云路站', '汽车西站'],
                test11: ['麓云路站', '汽车西站'],
                test12: ['麓云路站', '汽车西站'],
            },
            {
                key: Math.random(),
                test1: ['地铁6号线运行监测'],
                test2: ['麓云路站', '汽车西站'],
                test3: ['车站', '区间'],
                test4: ['0', '1'],
                test5: ['正常', '异常'],
                test6: ['长沙路松路口', '长沙东方红路口'],
                test7: ['0', '2'],
                test8: ['0', '0'],
                test9: ['0', '0'],
                test10: ['0', '0'],
                test11: ['2018-9-23 15:53', '2018-9-23 15:53'],
                test12: ['2018-9-23 15:53', '2018-9-23 15:53'],
            },
            {
                key: Math.random(),
                test1: ['地铁6号线运行监测'],
                test2: ['麓云路站', '汽车西站'],
                test3: ['车站', '区间'],
                test4: ['0', '1'],
                test5: ['正常', '异常'],
                test6: ['长沙路松路口', '长沙东方红路口'],
                test7: ['0', '2'],
                test8: ['0', '0'],
                test9: ['0', '0'],
                test10: ['0', '0'],
                test11: ['2018-9-23 15:53', '2018-9-23 15:53'],
                test12: ['2018-9-23 15:53', '2018-9-23 15:53'],
            },
            {
                key: Math.random(),
                test1: ['地铁6号线运行监测'],
                test2: ['麓云路站', '汽车西站'],
                test3: ['车站', '区间'],
                test4: ['0', '1'],
                test5: ['正常', '异常'],
                test6: ['长沙路松路口', '长沙东方红路口'],
                test7: ['0', '2'],
                test8: ['0', '0'],
                test9: ['0', '0'],
                test10: ['0', '0'],
                test11: ['2018-9-23 15:53', '2018-9-23 15:53'],
                test12: ['2018-9-23 15:53', '2018-9-23 15:53'],
            },
            {
                key: Math.random(),
                test1: ['地铁6号线运行监测'],
                test2: ['麓云路站', '汽车西站'],
                test3: ['车站', '区间'],
                test4: ['0', '1'],
                test5: ['正常', '异常'],
                test6: ['长沙路松路口', '长沙东方红路口'],
                test7: ['0', '2'],
                test8: ['0', '0'],
                test9: ['0', '0'],
                test10: ['0', '0'],
                test11: ['2018-9-23 15:53', '2018-9-23 15:53'],
                test12: ['2018-9-23 15:53', '2018-9-23 15:53'],
            },
            {
                key: Math.random(),
                test1: ['地铁6号线运行监测'],
                test2: ['麓云路站', '汽车西站'],
                test3: ['车站', '区间'],
                test4: ['0', '1'],
                test5: ['正常', '异常'],
                test6: ['长沙路松路口', '长沙东方红路口'],
                test7: ['0', '2'],
                test8: ['0', '0'],
                test9: ['0', '0'],
                test10: ['0', '0'],
                test11: ['2018-9-23 15:53', '2018-9-23 15:53'],
                test12: ['2018-9-23 15:53', '2018-9-23 15:53'],
            },
            {
                key: Math.random(),
                test1: ['地铁6号线运行监测'],
                test2: ['麓云路站', '汽车西站'],
                test3: ['车站', '区间'],
                test4: ['0', '1'],
                test5: ['正常', '异常'],
                test6: ['长沙路松路口', '长沙东方红路口'],
                test7: ['0', '2'],
                test8: ['0', '0'],
                test9: ['0', '0'],
                test10: ['0', '0'],
                test11: ['2018-9-23 15:53', '2018-9-23 15:53'],
                test12: ['2018-9-23 15:53', '2018-9-23 15:53'],
            },
        ];
        return (
            <div className="manage">
                <Card
                    icon={<div style={{ width: '24px', height: '24px' }}></div>}
                    text='地铁化自动监测项目'
                >
                    <div className='manage-content'>
                        <div className="manage-operate-wrapper">
                            <div className="manage-export-btn">
                                <Button>导出</Button>
                            </div>
                            <div className="manage-search-input">
                                <Input
                                    placeholder='ID/项目名称'
                                    onOk={value => { console.log(value) }}
                                    onChange={value => { console.log(value) }}
                                />
                            </div>
                        </div>
                        <Table
                            rowSelection={rowSelection}
                            columns={columns}
                            dataSource={data}
                            size='middle'
                            bordered
                            pagination={false}
                        />
                    </div>
                </Card>
            </div>
        );
    }
}

export default Manage;