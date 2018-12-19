import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import Card from 'component/Card/Card';
import Button from 'component/Button/Button';
import Input from 'component/Input/Input';
import pagedata from 'store/page.js';
import manage from 'common/image/manage.png';
import './manage.scss';

const rowSelection = {
    // onChange: (selectedRowKeys, selectedRows) => {
    //     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    // },
    // getCheckboxProps: record => ({
    //     disabled: record.test1[0] === '地铁6号线运行监测', // Column configuration not to be checked
    //     name: record.name,
    // }),
};

class Manage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectTag: '',
            manageData: []
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
                    {value.map((v, i) => {
                        return <div
                            key={Math.random()}
                            className='k-select'
                            onClick={_ => {
                                pagedata.sector = { sectorId: row.sectorId[i], sectorName: row.sectorName[i] };
                                this.props.history.push('/project/manage/detail');
                            }}
                        >{v}</div>;
                    })}
                </div>
            )
        };

        const columns = [
            {
                title: 'ID/项目名',
                dataIndex: 'projectName',
            },
            {
                title: 'K段',
                dataIndex: 'sectorName',
                render: renderKContent
            },
            {
                title: '类型',
                dataIndex: 'itemName',
                render: renderContent
            },
            {
                title: '监控',
                dataIndex: 'sectorStatus',
                render: renderContent
            },
            {
                title: '状态',
                dataIndex: 'errorStatus',
                render: renderContent
            },
            {
                title: '地点',
                dataIndex: 'sectorAddress',
                render: renderContent
            },
            {
                title: '一级告警',
                dataIndex: 'level1',
                render: renderContent
            },
            {
                title: '二级告警',
                dataIndex: 'level2',
                render: renderContent
            },
            {
                title: '三级告警',
                dataIndex: 'level3',
                render: renderContent
            },
            {
                title: '设备告警',
                dataIndex: 'tError',
                render: renderContent
            },
            {
                title: '开始时间',
                dataIndex: 'sectorBeginTime',
                render: renderContent
            },
            {
                title: '结束时间',
                dataIndex: 'sectorEndTime',
                render: renderContent
            },
        ];

        return (
            <div className="manage">
                <Card
                    icon={<div style={{ width: '24px', height: '24px' }}><img src={manage} alt="" /></div>}
                    text={`${pagedata.projectType.projectTypeName}自动监测项目`}
                >
                    <div className='manage-content'>
                        <div className="manage-operate-wrapper">
                            <div className="manage-export-btn">
                                <Button>导出</Button>
                            </div>
                            <div className="manage-search-input">
                                <Input
                                    placeholder='ID/项目名称'
                                    onOk={value => {
                                        this.setState({ projectTag: value }, this.getManage.bind(this));
                                    }}
                                // onChange={value => { console.log(value) }}
                                />
                            </div>
                        </div>
                        <Table
                            rowSelection={rowSelection}
                            columns={columns}
                            dataSource={this.state.manageData}
                            size='middle'
                            bordered
                            pagination={false}
                        />
                    </div>
                </Card>
            </div>
        );
    }
    componentDidMount() {
        this.getManage();
    }
    getManage() {
        const { projectTag } = this.state;
        axios.get('/project/queryProjects', {
            params: {
                scId: pagedata.projectType.projectTypeId,
                projectTag
            }
        }).then(res => {
            const { code, msg, data } = res.data;
            if (code === 0) {
                this.setState({ manageData: this.formatData(data) });
                // this.setState({ pagination: { ...this.state.pagination, total: data.totalPage } });
            } else {
                this.setState({ manageData: [] });
                console.log('/project/queryProjects code: ', code, msg);
            }
        }).catch(err => { alert(err) });
    }
    formatData(ary) {
        let formatData = [];
        ary.forEach(v => {
            let obj = {};
            let obj2 = {
                sectorName: [],
                sectorId: [],
                itemName: [],
                sectorStatus: [],
                errorStatus: [],
                sectorAddress: [],
                alarmTotal: [],
                level1: [],
                level2: [],
                level3: [],
                tError: [],
                sectorBeginTime: [],
                sectorEndTime: [],
            };
            obj.key = Math.random();
            obj.projectId = v.projectId;
            obj.projectName = v.projectName;
            v.list.forEach(v2 => {
                obj2.sectorName.push(v2.sectorName);
                obj2.sectorId.push(v2.sectorId);
                obj2.itemName.push(v2.itemName);
                obj2.sectorStatus.push(v2.sectorStatus);
                obj2.errorStatus.push(v2.errorStatus);
                obj2.sectorAddress.push(v2.sectorAddress);
                obj2.alarmTotal.push(v2.alarmTotal);
                obj2.level1.push(v2.level1);
                obj2.level2.push(v2.level2);
                obj2.level3.push(v2.level3);
                obj2.tError.push(v2.tError);
                obj2.sectorBeginTime.push(v2.sectorBeginTime);
                obj2.sectorEndTime.push(v2.sectorEndTime);
            });
            formatData.push({ ...obj, ...obj2 });
        });
        return formatData;
    }
}

export default Manage;