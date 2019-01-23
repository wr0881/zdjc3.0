import React, { Component } from 'react';
import { Table, Form, Input, Select, Button } from 'antd';
import axios from 'axios';
import { Post } from 'common/js/util';
import pageData from 'store/page';
import './risk.scss';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const columns = [
            {
                title: '作业活动/场所',
                dataIndex: 'jobActivity'
            },
            {
                title: '危险源',
                dataIndex: 'dangerousSource'
            },
            {
                title: '导致风险',
                dataIndex: 'riskResult'
            },
            {
                title: '作业条件危险性评价',
                dataIndex: 'raowcL'
            },
        ];
        return (
            <div className="library">
                <div className="library-seach">
                    <Form
                        layout="inline"
                        onSubmit={e => {
                            e.preventDefault();
                            this.props.form.validateFieldsAndScroll((err, values) => {
                                if (!err) {
                                    const { jobActivity, libraryType } = values;
                                    this.getLibrary(jobActivity, libraryType);
                                }
                            });
                        }}>
                        <Form.Item
                            label="作业活动/场所"
                        >
                            {getFieldDecorator('jobActivity', { initialValue: '' })(<Input placeholder='全部' />)}
                        </Form.Item>
                        <Form.Item
                            label="危险类型"
                        >
                            {getFieldDecorator('libraryType', { initialValue: '' })(
                                <Select style={{ width: '174px' }}>
                                    <Select.Option value="">暂无</Select.Option>
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">搜索</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="library-content">
                    <Table columns={columns} dataSource={this.state.dataSource} pagination={false} />
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.getLibrary();
    }
    getLibrary(jobActivity = '', type = '') {
        axios.post('/hazards/getHazards', Post({
            sectorId: pageData.sector.sectorId,
            jobActivity,
            type
        })).then(res => {
            const { code, msg, data } = res.data;
            if (code === 0) {
                const dataSource = data.map(v => {
                    return { ...v, key: Math.random() }
                });
                this.setState({ dataSource });
            }
        });
    }
}

export default Form.create()(Library);