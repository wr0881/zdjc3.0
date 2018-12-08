import React, { Component } from 'react';
import echarts from 'echarts';
import { Checkbox } from 'antd';
import './dataAnalyse.scss';

const CheckboxGroup = Checkbox.Group;

const options = [
    { label: '测点1', value: '1' },
    { label: '测点2', value: '2' },
    { label: '测点3', value: '3' },
    { label: '测点4', value: '4' },
    { label: '测点5', value: '5' },
    { label: '测点6', value: '6' },
    { label: '测点7', value: '7' },
    { label: '测点8', value: '8' },
    { label: '测点9', value: '9' },
];

class DataAnalyse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue: []
        }
    }
    render() {
        const { selectValue } = this.state;
        return (
            <div className="dataAnalyse-wrapper">
                <div className="dataAnalyse-chart-wrapper">
                    <div className="dataAnalyse-type-wrapper">
                        <div className="dataAnalyse-type-name">累计变化量</div>
                        <div className="dataAnalyse-type-btnGrounp">
                            <span className='dataAnalyse-type-btn-active'>累计变化量</span>
                            <span>单次变化量</span>
                            <span>变化速率</span>
                        </div>
                    </div>
                    <div>
                        <div className='dataAnalyse-chart' ref='chart'></div>
                    </div>
                    <div className="dataAnalyse-type-wrapper">
                        <div className="dataAnalyse-type-btnGrounp">
                            <span>全部</span>
                            <span className='dataAnalyse-type-btn-active'>一周</span>
                            <span>一月</span>
                            <span>一年</span>
                        </div>
                    </div>
                </div>
                <div className="dataAnalyse-operate-wrapper">
                    <div className="dataAnalyse-operate-title">选择对比数据</div>
                    <div className="dataAnalyse-operate-select">
                        <CheckboxGroup options={options} defaultValue={selectValue}
                            onChange={v => { this.setState({ selectValue: v }) }}
                        />
                    </div>
                    <div className="dataAnalyse-operate-btn">
                        <span className="dataAnalyse-operate-btn1">重置</span>
                        <span className="dataAnalyse-operate-btn2">对比</span>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.initChart();
    }
    initChart() {
        const chart = echarts.init(this.refs.chart);

        const option = {
            color: ['#32D184', '#E4B669', '#1890FF', '#EA4C48', '#5D3AB3', '#7AAFD5',],
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
                top: '50',
                bottom: '0',
                left: '30',
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

export default DataAnalyse;