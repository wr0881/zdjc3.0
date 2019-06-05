import React, { Component } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react';
import Hot from 'component/Hot/hot';
import monitorpage from 'store/monitorpage.js';
//banner图
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import {Checkbox} from 'antd';

const CheckboxGroup = Checkbox.Group;

@observer
class PointMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sectorPoints:[]
        }
    }
    render() {
        return (
            <div className="point-map-wrapper">
                <div className="swiper-container">
                    <div className="swiper-wrapper" style={{ width: '100%', height: '240px' }}>
                        {monitorpage.blueprintData.map(v => {
                            return (
                                <div key={Math.random()} className="swiper-slide">
                                    <Hot
                                        key={Math.random()}
                                        style={{ width: '100%', height: '100%' }}
                                        imgUrl={`${window.Psq_ImgUrl}${v.imageUrl}`}
                                        onClick={v => {
                                            if (v.monitorPointNumber !== monitorpage.selectPoint.monitorPointNumber) {
                                                monitorpage.selectPoint = v;
                                            }
                                            console.log("点击测点！！！");
                                        }}
                                        imgInfo={v}
                                        dataSource={v.monitorPoints}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    {/* <div className="swiper-pagination"></div> */}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                {/* <div>
                    <span>选择测点：</span>
                    <CheckboxGroup
                        key={Math.random()}
                        defaultValue={this.sectorPoint}
                        onChange={v=>{this.sectorPoint = v}}
                    >
                        {this.state.sectorPoints}
                    </CheckboxGroup>
                </div> */}
            </div>
        );
    }
    componentDidMount() {
        this.initBanner();
        this.getBlueprintData();
    }
    initBanner() {
        new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            observer: true,
        });
    }
    getBlueprintData() {
        const token = 'Bearer eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNqqVspMLFGyMjQ1NTQ2MjK2tNBRSixNUbJSKk9NUtJRSq0ogEmaGIIkS4tTi_wSc1OBKopLC1KLElNyM_OUagEAAAD__w.TRH7E2NyAL2HhXXIbTUwJOEHtzd3NxyWY2WMlnKt-2I';
        axios.get('/sector/queryImagesMonitorPoint', {
            //headers: {'Authorization': token},
            params: {
                Authorization:token,
                sectorId: 9,
                imageType: 3
            }
        }).then(res => {
            const { code, msg, data } = res.data;
            if (code === 0 || code === 2) {
                monitorpage.blueprintData=data;
                console.log(monitorpage.selectPointList);
                const sectorPoints = monitorpage.selectPointList.map(v=>{return <Checkbox key={v.monitorPointNumber} value={v.monitorPointNumber}>{v.monitorPointNumber}</Checkbox>});
                this.setState({sectorPoints});
                console.log(this.state.sectorPoints);            
                console.log(data[0].monitorPoints);
                console.log(data[0].monitorPoints[0].monitorPointNumber);
            } else {
                monitorpage.blueprintData=[];
                console.log('/sector/queryImagesMonitorPoint code: ', code, msg);
            }
        })
    }
}

export default PointMap;