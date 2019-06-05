import React, { Component } from 'react';
import { autorun, toJS } from 'mobx';
import { observer } from 'mobx-react';
import echarts from 'echarts';
import axios from 'axios';
import Hot from 'component/Hot/hot';
import { DatePicker, Checkbox, Button, Badge, Icon, Modal, Select } from 'antd';
//import PointMap from './pointMap';
import monitorpage from 'store/monitorpage.js';

import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

const { RangePicker } = DatePicker;
const { Option } = Select;
const CheckboxGroup = Checkbox.Group;
const dateFormat = 'YYYY-MM-DD HH:mm:ss';

@observer
class PointDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selsectTime: [],
            sectorPoint: [],
            chart: null
        }
    }
    showModal = () =>{
        this.setState({
            dataPointVisible:true
        })
    }
    handleOk = e =>{
        this.setState({
            dataPointVisible:false
        })
    }
    handleCancel = e =>{
        this.setState({
            dataPointVisible:false
        })
    }
    render() {
        return (
            <div className="point-detail-wrapper">
                <div className="point-detail-operate">
                    <span>时间区间</span>
                    <RangePicker showTime format={dateFormat} defaultValue={monitorpage.selsectTime}
                        onOk={v => {
                            monitorpage.selsectTime = v;
                            monitorpage.getMapEchartData();
                        }}
                    />
                    <Button
                        type='primary'
                        loading={monitorpage.timeselectLoading}
                        onClick={() => {
                            monitorpage.timeselectLoading = true;
                            monitorpage.getMapEchartData();
                        }}
                    >查看</Button>
                    {/* <Button
                        type='primary'
                        style={{ marginLeft: '20px' }}
                        onClick={_ => {
                            monitorpage.dataContrastVisible = true;
                        }}
                    >数据对比</Button> */}
                    <div style={{
                        flex: '1 1 auto',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                        <div style={{ marginRight: '10px',cursor: 'pointer' }}>选择指标</div>
                        <Select
                            showSearch
                            style={{ width: 200, float: 'right' }}
                            placeholder="选择指标"
                            value={monitorpage.monitorTypeName}
                            onChange={v => { monitorpage.monitorTypeName = JSON.parse(v) }}
                        >
                            {monitorpage.monitorTypeData.map(v => {
                                return <Option key={v.monitorType} value={v.monitorType}>{v.monitorTypeName}</Option>
                            })}
                        </Select>
                    </div>
                    <div style={{
                        flex: '1 1 auto',
                        display: 'flex',
                        marginLeft: '20px',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        <div style={{ marginRight: '10px',cursor: 'pointer' }} onClick={this.showModal}>选择测点</div>
                    </div>
                </div>
                <Modal
                    visible={this.state.dataPointVisible}
                    destroyOnClose={true}
                    keyboard={true}
                    footer={null}
                    width='700px'
                    height='540px'
                    bodyStyle={{ padding: '0px' }}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div style={{height:'540px'}}>                    
                        <div className="dataMonitor-operate-select">
                            <CheckboxGroup
                                key={Math.random()}
                                defaultValue={this.pointName}
                                onChange={v => { this.pointName = v }}
                            >
                                {this.state.sectorPoints}
                            </CheckboxGroup>
                        </div>
                        <div className="dataMonitor-operate-button">
                            <Button
                                style={{ width: '80px', height: '24px' }}
                                type='primary'
                                onClick={v => {
                                    monitorpage.selectPoint = v;
                                    this.initChart();                                   
                                    this.handleOk();
                                }}
                            >确认</Button>
                        </div>                    
                    </div>
                </Modal>
                <div className='pointmap-explain'>
                    <Badge color="green" text="正常" />
                    <Badge color="yellow" text="一级告警" />
                    <Badge color="orange" text="二级告警" />
                    <Badge color="red" text="三级告警" />
                    <Badge color="gray" text="监测完毕" />
                    <span style={{ color: '#faad14' }}>
                        <Icon type="exclamation-circle" />
                        <span style={{ marginLeft: '8px', color: 'rgba(0, 0, 0, 0.65)' }}>点击下图圆点查看测点数据信息!</span>
                    </span>
                </div>
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
                                                // if (v.monitorPointNumber !== monitorpage.selectPoint.monitorPointNumber) {
                                                //     monitorpage.selectPoint = v;
                                                // }
                                                console.log("点击测点！！！");
                                            }}
                                            imgInfo={v}
                                            dataSource={v.monitorPoints}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>
                <div style={{ display: JSON.stringify(toJS(monitorpage.selectPoint)) === '{}' ? 'block' : 'none', height: '400px' }}>
                    <div style={{ height: '50px' }}></div>
                    <span style={{ padding: '50px' }}>暂无数据信息，请选择测点!</span>
                </div>
                <div className="point-detail-content" style={{
                    display: JSON.stringify(toJS(monitorpage.selectPoint)) === '{}' ? 'none' : 'flex',height:'420px'
                }}>
                    <div className="point-detail-chart-wrapper" style={{
                        display: monitorpage.isShowMapChart ? 'block' : 'none'
                    }}>
                        <div>
                            <div className="point-detail-chart" ref='chart'></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.initChart();
        this.initBanner();
        this.getBlueprintData();
        let destroyAutorun = autorun(() => {
            const mapEchartData = toJS(monitorpage.mapEchartData);
            if (JSON.stringify(mapEchartData) !== '{}') {
                this.setEchartLine(mapEchartData);
            }
        });
        this.destroyAutorun = destroyAutorun;
    }
    componentWillUnmount() {
        this.destroyAutorun && this.destroyAutorun();
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
                sectorId: 21,
                imageType: 3
            }
        }).then(res => {
            const { code, msg, data } = res.data;
            if (code === 0 || code === 2) {
                monitorpage.blueprintData=data;
                console.log(monitorpage.selectPointList);
                const sectorPoints = monitorpage.selectPointList.map(v=>{return <Checkbox key={v.monitorPointNumber} value={v.monitorPointNumber}>{v.monitorPointNumber}</Checkbox>});
                this.setState({sectorPoints});
            } else {
                monitorpage.blueprintData=[];
                console.log('/sector/queryImagesMonitorPoint code: ', code, msg);
            }
        })
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
                data: [],
                selectedMode: 'single'
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: { 
                        show: true,
                        title: '数据视图',
                        textColor: 'rgba(0, 0, 0, 0.65)',
                        textareaBorderColor: '#DFDDEC',
                        buttonColor: '#5D3AB3',
                        readOnly: true,
                        lang:['数据视图','关闭','刷新'],
                        optionToContent: function (opt) {
                            let axisData = opt.xAxis[0].data; //坐标数据
                            console.log(opt.xAxis[0]);
                            let series = opt.series; //折线图数据
                            let tdHeads = '<td  style="padding: 0 10px">测试时间</td>'; //表头
                            let tdBodys = ''; //数据
                            series.forEach(function (item) {
                                //组装表头
                                tdHeads += `<td style="padding: 0 10px">${item.name}</td>`;
                            });
                            let table = `<table border="1" style="width:100%;border-collapse:collapse;font-size:14px;text-align:center;border-color:#DFDDEC"><tbody><tr>${tdHeads} </tr>`;
                            console.log(axisData.length);
                            for (let i = 0, l = axisData.length; i < l; i++) {
                                for (let j = 0; j < series.length; j++) {
                                    //组装表数据
                                    tdBodys += `<td>${ series[j].data[i]}</td>`;
                                }
                                table += `<tr><td style="padding: 0 10px">${axisData[i]}</td>${tdBodys}</tr>`;
                                tdBodys = '';
                            }
                            table += '</tbody></table>';
                            return table;
                        }
                    },
                    magicType: { type: ['line', 'bar'] },
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    symbol: ['none', 'arrow'],
                    onZero: false,
                    lineStyle: {
                        color: '#BFBFBF'
                    }
                },
                axisLabel: {
                    color: '#545454'
                },
                data: []
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
                    showMaxLabel: false,
                    color: '#545454'
                },
                axisLine: {
                    symbol: ['none', 'arrow'],
                    lineStyle: {
                        color: '#BFBFBF'
                    }
                }
            },
            series: [

            ]
        };

        chart.setOption(option);

        this.chart = chart;

        window.addEventListener('resize', _ => {
            chart.resize();
        });
    }
    setEchartLine(data) {
        const chart = this.chart;

        let time = [], singleChange = [], totalChange = [], speedChange = [];
        data.commonDataVOs && data.commonDataVOs.forEach(v => {
            time.push(v.createDate);
            singleChange.push(v.singleChange);
            totalChange.push(v.totalChange);
            speedChange.push(v.speedChange);
        });
        chart && chart.setOption({
            legend: {
                data: ['累计变化量' + 'mm'],
                selectedMode: 'single'
            },
            xAxis: {
                data: time
            },
            yAxis: {
                name: `单位: mm`
            },
            series: [
                {
                    name: '累计变化量' + 'mm',
                    type: 'line',
                    data: totalChange
                }
            ]
        })
        setTimeout(() => { chart.resize && chart.resize() }, 16);
    }
}

export default PointDetail;