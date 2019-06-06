import React, { Component } from 'react';
import echarts from 'echarts';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    render() {
        return (
            <div ref='overviewChart' className='overview-chart'></div>
        );
    }
    componentDidMount() {
        this.initChart();
    }
    initChart() {
        const chart = echarts.init(this.refs.overviewChart);
        const seriesLabel = {
            normal: {
                show: true,
                textBorderColor: '#333',
                textBorderWidth: 2
            }
        }

        const option = {
            color: ['#FE9E84', '#FF9A3A', '#EB4E4A'],
            grid: {
                top: '30',
                bottom: '0',
                left: '0',
                right: '0',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['一级告警', '二级告警', '三级告警']
            },
            // grid: {
            //     left: 100
            // },
            xAxis: {
                type: 'category',
                axisLabel: {
                    color: '#8E92A3'
                },
                data: ['砼支撑轴力','钢支撑轴力'],
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: '#E9E9E9'
                    }
                }
                
            },
            series: [
                {
                    name: '一级告警',
                    type: 'bar',
                    data: [10,1],
                    label: seriesLabel
                },
                {
                    name: '二级告警',
                    type: 'bar',
                    label: seriesLabel,
                    data: [51,0],
                },
                {
                    name: '三级告警',
                    type: 'bar',
                    label: seriesLabel,
                    data: [475,29],
                }
            ]
        };

        chart.setOption(option);

        window.addEventListener('resize', _ => {
            chart.resize();
        });
    }
}

export default Chart;