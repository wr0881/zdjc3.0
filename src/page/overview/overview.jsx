import React, { Component } from 'react';
import Card from 'component/Card/Card';
import './overview.scss';

class overview extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="overview">
                <div className="overview-dec">
                    <Card
                        icon={<div style={{ width: '24px', height: '24px' }}></div>}
                        text='资源概览'
                    >
                        <div className='resource-overview-wrapper'>
                            <div className="resource-overview-item" style={{ borderColor: '#32D184' }}>
                                <div className="resource-overview-item-num">15</div>
                                <div className="resource-overview-item-type">监测中</div>
                            </div>
                            <div className="resource-overview-item" style={{ borderColor: '#F0514D' }}>
                                <div className="resource-overview-item-num">02</div>
                                <div className="resource-overview-item-type">异常项目</div>
                            </div>
                            <div className="resource-overview-item" style={{ borderColor: '#8562DD' }}>
                                <div className="resource-overview-item-num">03</div>
                                <div className="resource-overview-item-type">已完毕</div>
                            </div>
                            <div className="resource-overview-item" style={{ borderColor: '#F6BD5C' }}>
                                <div className="resource-overview-item-num">04</div>
                                <div className="resource-overview-item-type">即将完毕</div>
                            </div>
                            <div className="resource-overview-item" style={{ borderColor: '#32D184' }}>
                                <div className="resource-overview-item-num">24</div>
                                <div className="resource-overview-item-type">共有项目</div>
                            </div>
                        </div>
                    </Card>
                    <Card
                        icon={<div style={{ width: '24px', height: '24px' }}></div>}
                        text='项目告警'
                    >
                        <div className="overview-alarm-wrapper">
                            <div className="overview-alarm-item">广西贵港至隆安高速公路边坡至隆安高速公路</div>
                            <div className="overview-alarm-item">广西贵港至隆安高速公路边坡至隆安高速公路</div>
                            <div className="overview-alarm-item">广西贵港至隆安高速公路边坡至隆安高速公路</div>
                            <div className="overview-alarm-item">广西贵港至隆安高速公路边坡至隆安高速公路</div>
                            <div className="overview-alarm-item">广西贵港至隆安高速公路边坡至隆安高速公路</div>
                            <div className="overview-alarm-item">广西贵港至隆安高速公路边坡至隆安高速公路</div>
                            <div className="overview-alarm-item">广西贵港至隆安高速公路边坡至隆安高速公路</div>
                            <div className="overview-alarm-item">广西贵港至隆安高速公路边坡至隆安高速公路</div>
                            <div className="overview-alarm-item">广西贵港至隆安高速公路边坡至隆安高速公路</div>
                        </div>
                    </Card>
                    <Card
                        icon={<div style={{ width: '24px', height: '24px' }}></div>}
                        text='即将完毕项目'
                    >
                        <div className="overview-coming-wrapper">
                            <div className="overview-coming-item">广西贵港至隆安高速公路边坡至隆安高速公路</div>
                            <div className="overview-coming-item">广西贵港至隆安高速公路边坡至隆安高速公路</div>
                            <div className="overview-coming-item">广西贵港至隆安高速公路边坡至隆安高速公路</div>
                            <div className="overview-coming-item">广西贵港至隆安高速公路边坡至隆安高速公路</div>
                            <div className="overview-coming-item">广西贵港至隆安高速公路边坡至隆安高速公路</div>
                            <div className="overview-coming-item">广西贵港至隆安高速公路边坡至隆安高速公路</div>
                            <div className="overview-coming-item">广西贵港至隆安高速公路边坡至隆安高速公路</div>
                            <div className="overview-coming-item">广西贵港至隆安高速公路边坡至隆安高速公路</div>
                            <div className="overview-coming-item">广西贵港至隆安高速公路边坡至隆安高速公路</div>
                        </div>
                    </Card>
                </div>
                <div className="overview-project">
                    <Card
                        icon={<div style={{ width: '24px', height: '24px' }}></div>}
                        text='项目监测概览'
                    >
                        <div className='overview-project-content'>
                            <Card
                                icon={<div style={{ width: '8px', height: '8px' }}></div>}
                                text='地铁二号线'
                                className='overview-project-item'
                            >
                                <div className="overview-item-content">
                                    <div className="overview-item-title">项目描述</div>
                                    <div className="overview-item-dec">项目地位于深圳市高新技术产业园南区,地处高新区核心地带。项目东临沙河西路、西至科技南路、南临高新南十道、北至白石路。基坑占地面积约4万平米，基坑深度约13.7米。拟建地下室3层。基坑工程的支护安全等级为一级。</div>
                                    <div className="overview-item-chart-wrapper">
                                        <div className="overview-item-chart-dec"></div>
                                        <div className="overview-item-chart"></div>
                                    </div>
                                </div>
                            </Card>
                            <Card
                                icon={<div style={{ width: '8px', height: '8px' }}></div>}
                                text='地铁二号线'
                                className='overview-project-item'
                            >
                                2
                            </Card>
                            <Card
                                icon={<div style={{ width: '8px', height: '8px' }}></div>}
                                text='地铁二号线'
                                className='overview-project-item'
                            >
                                3
                            </Card>
                            <Card
                                icon={<div style={{ width: '8px', height: '8px' }}></div>}
                                text='地铁二号线'
                                className='overview-project-item'
                            >
                                4
                            </Card>
                            <Card
                                icon={<div style={{ width: '8px', height: '8px' }}></div>}
                                text='地铁二号线'
                                className='overview-project-item'
                            >
                                4
                            </Card>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default overview;