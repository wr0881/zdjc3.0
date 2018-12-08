import React, { Component } from 'react';
import echarts from 'echarts';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div ref='overviewChart' className='overview-chart'>chart</div>
        );
    }
    componentDidMount() {
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
                data: ['沉降', '收敛', '位移'],
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
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name: '一级告警',
                    type: 'bar',
                    data: [165, 170, 30],
                    label: seriesLabel
                },
                {
                    name: '二级告警',
                    type: 'bar',
                    label: seriesLabel,
                    data: [150, 105, 110]
                },
                {
                    name: '三级告警',
                    type: 'bar',
                    label: seriesLabel,
                    data: [220, 82, 63]
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