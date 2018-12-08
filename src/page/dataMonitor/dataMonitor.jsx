import React, { Component } from 'react';
import { DatePicker, Modal } from 'antd';
import echarts from 'echarts';
import DataAnalyse from './dataAnalyse';
import './dataMonitor.scss';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

class DataMonitor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    render() {
        return (
            <div className='dataMonitor-wrapper'>
                <div className="point-map-wrapper">
                    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}><img src="http://attach.bbs.miui.com/forum/201807/17/154537ujxutueesyj3mzt0.jpg" alt="" /></div>
                </div>
                <div className="point-detail-wrapper">
                    <div className="point-detail-operate">
                        <span>时间区间</span>
                        <RangePicker format={dateFormat} />
                        <div className="point-detail-operate-timeselect">查看</div>
                        <div className="point-detail-operate-timeselect"
                            onClick={_ => {
                                this.setState({ visible: true })
                            }}
                        >数据对比</div>
                    </div>
                    <div className="point-detail-content">
                        <div className="point-detail-table-wrapper">
                            <div className="point-detail-table1">
                                <div className="point-detail-table1-item">
                                    <span>测点名称</span>
                                    <span>cj43</span>
                                </div>
                                <div className="point-detail-table1-item">
                                    <span>采集器通道</span>
                                    <span>cj43</span>
                                </div>
                                <div className="point-detail-table1-item">
                                    <span>传感器编号</span>
                                    <span>cj43</span>
                                </div>
                                <div className="point-detail-table1-item">
                                    <span>检测指标</span>
                                    <span>cj43</span>
                                </div>
                                <div className="point-detail-table1-item">
                                    <span>采集器编号</span>
                                    <span>cj43</span>
                                </div>
                                <div className="point-detail-table1-item">
                                    <span>传感器类型</span>
                                    <span>cj43</span>
                                </div>
                            </div>
                            <div className="point-detail-table2">
                                <div className="point-detail-table2-item">
                                    <span>实时值</span>
                                    <span>cj43</span>
                                </div>
                                <div className="point-detail-table2-item">
                                    <span>测量时间</span>
                                    <span>cj43</span>
                                </div>
                                <div className="point-detail-table2-item">
                                    <span>累计变化量</span>
                                    <span>cj43</span>
                                </div>
                                <div className="point-detail-table2-item">
                                    <span>变化速率</span>
                                    <span>cj43</span>
                                </div>
                            </div>
                        </div>
                        <div className="point-detail-chart-wrapper">
                            <div>
                                <div className="point-detail-chart" ref='chart'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    key='dataAnalyse'
                    title={<div className='user-change-pwd'>数据对比</div>}
                    visible={this.state.visible}
                    destroyOnClose={true}
                    footer={null}
                    width='1200px'
                    bodyStyle={{ padding: '0px' }}
                    // onOk={this.handleOk}
                    onCancel={_ => { this.setState({ visible: false }) }}
                >
                    <DataAnalyse />
                </Modal>
            </div>
        );
    }
    componentDidMount() {
        this.initChart();
    }
    initChart() {
        const chart = echarts.init(this.refs.chart);

        const option = {
            color: ['#32D184', '#E4B669', '#1890FF'],
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(0,0,0,0.82)',
                textStyle: {
                    fontSize: 13
                },
                axisPointer: {
                    type: 'cross',
                    label: {
                        color: '#fff',
                        backgroundColor: '#5D3AB3'
                    }
                }
            },
            grid: {
                top: '30',
                bottom: '10',
                left: '0',
                right: '30',
                containLabel: true
            },
            legend: {
                data: ['累计变化量', '单次变化量', '变化速率']
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#BFBFBF'
                    }
                },
                axisLabel: {
                    color: '#545454'
                },
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: '#E9E9E9'
                    }
                },
                axisLabel: {
                    color: '#545454'
                },
                axisLine: {
                    lineStyle: {
                        color: '#BFBFBF'
                    }
                }
            },
            series: [
                {
                    name: '累计变化量',
                    type: 'line',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '单次变化量',
                    type: 'line',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '变化速率',
                    type: 'line',
                    data: [150, 232, 201, 154, 190, 330, 410]
                }
            ]
        };

        chart.setOption(option);

        window.addEventListener('resize', _ => {
            chart.resize();
        });
    }
}

export default DataMonitor;