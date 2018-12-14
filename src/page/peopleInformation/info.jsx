import React, { Component } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import pagedata from 'store/page.js';
import './info.scss';

const columns = [
    {
        title: '姓名',
        dataIndex: 'memberName'
    },
    {
        title: '联系电话',
        dataIndex: 'memberPhone'
    },
    {
        title: '邮箱',
        dataIndex: 'memberEmail'
    },
    {
        title: '岗位',
        dataIndex: 'memberCompany'
    },
    {
        title: '备注',
        dataIndex: 'sectorRole'
    },
];

class PeopleInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyA: '',
            companyB: '',
            principalA: '',
            principalB: '',
            membersA: [],
            membersB: [],
        }
    }
    render() {
        const state = { ...this.state };
        return (
            <div className="peopleInformation">
                <div className="peopleInformation-wrapper">
                    <div className="peopleInformation-company">甲方:{state.companyA}</div>
                    <div className="peopleInformation-name">负责人：{state.principalA}</div>
                    <div className="peopleInformation-content">
                        <Table columns={columns} dataSource={state.membersA} pagination={false} />
                    </div>
                </div>
                <div className="peopleInformation-wrapper">
                    <div className="peopleInformation-company">乙方:{state.companyB}</div>
                    <div className="peopleInformation-name">负责人：{state.principalB}</div>
                    <div className="peopleInformation-content">
                        <Table columns={columns} dataSource={state.membersB} pagination={false} />
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.getPeopleInformation();
    }
    getPeopleInformation() {
        axios.get('/sector/querySectorMember', {
            params: {
                sectorId: pagedata.sector.sectorId
            }
        }).then(res => {
            const { code, msg, data } = res.data;
            if (code === 0) {
                this.setState({ companyA: data.partyA.company, principalA: data.partyA.principal });
                this.setState({ companyB: data.partyB.company, principalB: data.partyB.principal });
                const membersA = data.partyA.members.map(v => {
                    return { ...v, key: Math.random() };
                });
                const membersB = data.partyB.members.map(v => {
                    return { ...v, key: Math.random() };
                });
                this.setState({ membersA, membersB });
            } else {
                console.log('/sector/querySectorMember: ', code, msg);
            };
        }).catch(err => { alert(err) });
    }
}

export default PeopleInformation;