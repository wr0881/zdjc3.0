import React, { Component } from 'react';
import { Table } from 'antd';
import './info.scss';

class PeopleInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="peopleInformation">
                <div className="peopleInformation-wrapper">
                    <div className="peopleInformation-company">甲方:中铁十五局</div>
                    <div className="peopleInformation-name">负责人：罗杰</div>
                    <div className="peopleInformation-content">
                        <Table columns={columns} dataSource={data} pagination={false} />
                    </div>
                </div>
                <div className="peopleInformation-wrapper">
                    <div className="peopleInformation-company">乙方:中大检测</div>
                    <div className="peopleInformation-name">负责人：白川介</div>
                    <div className="peopleInformation-content">
                        <Table columns={columns} dataSource={data} pagination={false} />
                    </div>
                </div>
            </div>
        );
    }
}

const columns = [
    {
        title: '姓名',
        dataIndex: 'name'
    },
    {
        title: '联系电话',
        dataIndex: 'phone'
    },
    {
        title: '邮箱',
        dataIndex: 'email'
    },
    {
        title: '岗位',
        dataIndex: 'post'
    },
    {
        title: '备注',
        dataIndex: 'remarks'
    },
];

const data = [
    {
        key: Math.random(),
        name: '张三',
        phone: '13348167549',
        email: '134589453@google.com',
        post: '工程师',
        remarks: 'aaayyyyccccccc'
    },
    {
        key: Math.random(),
        name: '张三',
        phone: '13348167549',
        email: '134589453@google.com',
        post: '工程师',
        remarks: 'aaayyyyccccccc'
    },
    {
        key: Math.random(),
        name: '张三',
        phone: '13348167549',
        email: '134589453@google.com',
        post: '工程师',
        remarks: 'aaayyyyccccccc'
    },
    {
        key: Math.random(),
        name: '张三',
        phone: '13348167549',
        email: '134589453@google.com',
        post: '工程师',
        remarks: 'aaayyyyccccccc'
    },
]

export default PeopleInformation;