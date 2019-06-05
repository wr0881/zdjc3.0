import React, { Component } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react';
import { message } from 'antd';
import Hot from 'component/Hot/hot';
import monitorpage from 'store/monitorpage.js';
import cflimgUrl from 'common/image/cfl.png';
//banner图
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

@observer
class PointMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div className="point-map-wrapper">
                <div className="swiper-container">
                    <div className="swiper-wrapper" style={{ width: '100%', height: '300px' }}>
                        {/* <img src={cflimgUrl} alt="热点图" ref='hot' style={{ width:'auto',height:'auto',maxWidth:'100%',maxHeight:'60%',marginTop:'7%' }} /> */}
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
        axios.get('http://123.207.88.210:8180/sector/queryImagesMonitorPoint', {
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

            } else {
                monitorpage.blueprintData=[];
                console.log('/sector/queryImagesMonitorPoint code: ', code, msg);
            }
        })
    }
}

export default PointMap;