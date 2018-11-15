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
                        icon={<div className='icon'></div>}
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
                        icon={<div className='icon'></div>}
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
                        icon={<div className='icon'></div>}
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
                        icon={<div className='icon'></div>}
                        text='项目监测概览'
                    >
                        123
                    </Card>
                </div>
            </div>
        );
    }
}

export default overview;