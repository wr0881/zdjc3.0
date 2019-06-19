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
        this.getEchartDataLoading = false;
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
                    <span style={{ marginRight:'6px' }}>时间区间</span>
                    <RangePicker showTime format={dateFormat} defaultValue={monitorpage.selsectTime}
                        style={{ width: 312 }}
                        onOk={v => {
                            monitorpage.selsectTime = v;
                            console.log(v);
                        }}
                    />
                    
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
                        <div style={{ marginRight: '6px',cursor: 'pointer' }}>选择指标</div>
                        <Select
                            showSearch
                            style={{ width: 114, float: 'right' }}
                            placeholder="选择指标..."
                            // value={monitorpage.monitorTypeName}
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
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                        <div style={{ marginRight: '6px',cursor: 'pointer' }}>选择测点</div>
                        <Select
                            mode="multiple"
                            style={{ width: 246, float: 'right' }}
                            placeholder="选择测点..."
                            // defaultValue={monitorpage.monitorTypeName}
                            onChange={v => { this.selectPointName = v }}
                            maxTagCount={2}
                            maxTagTextLength={6}
                        >
                            {monitorpage.pointNameData.map(v=>{
                                return <Option key={v} value={v}>{v}</Option>
                            })}
                        </Select>
                    </div>
                    <Button
                        type='primary'
                        loading={this.getEchartDataLoading}
                        style={{ marginLeft:'10px' }}
                        onClick={() => {
                            this.getEchartDataLoading = true;
                            this.initChart();
                            this.getEchartData();
                        }}
                    >查看</Button>
                    {/* <div style={{
                        flex: '1 1 auto',
                        display: 'flex',
                        marginLeft: '20px',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        <div style={{ marginRight: '10px',cursor: 'pointer' }} onClick={this.showModal}>选择测点</div>
                    </div> */}
                </div>
                {/* <Modal
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
                                defaultValue={ this.selectPointName }
                                onChange={v => { this.selectPointName = v }}
                            >
                                {monitorpage.pointNameData.map(v=>{
                                    return <Checkbox key={v} value={v}>{v}</Checkbox>
                                })}
                            </CheckboxGroup>
                        </div>
                        <div className="dataMonitor-operate-button">
                            <Button
                                style={{ width: '80px', height: '24px' }}
                                type='primary'
                                onClick={v => {
                                    //monitorpage.selectPointName = v;
                                    this.initChart();
                                    this.getEchartData();
                                    this.handleOk();
                                }}
                            >确认</Button>
                        </div>                    
                    </div>
                </Modal> */}
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
                <div style={{ display:monitorpage.monitorTypeName ? 'block' : 'none' }}>
                    <div className='dataAnalyse-chart' ref='chart'></div>
                </div>
                <div style={{ display:monitorpage.monitorTypeName ? 'none' : 'block', height: '400px' }}>
                    <span style={{ margin: '50px', lineHeight: '100px' }}>暂无数据信息，请选择指标和测点!</span>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.initBanner();
        this.getBlueprintData();
        monitorpage.getMonitorTypeData();
        autorun(() => {
            if (monitorpage.monitorTypeName) {
                monitorpage.getPointName();
            }
        })
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
    getEchartData() {
        const selsectTime = monitorpage.selsectTime;
        const chart = this.chart;
        axios.get('/sector/queryComparisonData', {
            headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNqqVspMLFGyMjQ1NTQ2MjK2tNBRSixNUbJSKk9NUtJRSq0ogEmaGIIkS4tTi_wSc1OBKopLC1KLElNyM_OUagEAAAD__w.TRH7E2NyAL2HhXXIbTUwJOEHtzd3NxyWY2WMlnKt-2I'},
            params: {
                sectorId: 9,
                monitorType: monitorpage.monitorTypeName,
                pointNames: JSON.stringify(this.selectPointName),
                beginTime: selsectTime[0].format('YYYY-MM-DD HH:mm:ss'),
                endTime: selsectTime[1].format('YYYY-MM-DD HH:mm:ss'),
                dateType: 1
            }
        }).then(res => {
            const { code, msg, data } = res.data;
            if (code === 0 || code === 2) {
                this.contrastChartData = data.comparisonVO;
                this.setEchartLine();
                this.getEchartDataLoading = false;
            } else {
                this.contrastChartData = [];
                this.getEchartDataLoading = false;
                chart.hideLoading();
                chart.showLoading({color:'#fff',text:msg,textStyle:{fontSize:20}});
                console.log('/sector/queryComparisonData code: ', code, msg);
            }
        })
    }
    initChart() {
        const chart = echarts.init(this.refs.chart);
        const option = {
            color: ['#AA68F9', '#FCCB7C', '#EE757C', '#A0C1FE', '#32D184', '#E4B669', '#1890FF', '#EA4C48', '#5D3AB3', '#7AAFD5'],
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
                bottom: '20',
                left: '30',
                right: '50',
                containLabel: true
            },
            legend: {
                data:[],
                padding:[10,60],
            },
            toolbox: {
                right:'20px',
                feature: {
                    dataView: { 
                        show: true,
                        title: '数据视图',
                        textColor: 'rgba(0, 0, 0, 0.65)',
                        textareaBorderColor: '#DFDDEC',
                        buttonColor: '#5D3AB3',
                        readOnly: true,
                        lang:['数据视图','关闭',''],
                        optionToContent: function (opt) {
                            let axisData = opt.series[0].data; //坐标数据
                            //console.log(axisData);
                            let series = opt.series; //折线图数据
                            let tdHeads = '<td  style="padding: 0 10px;background:#fafafa;height:30px">测试时间</td>'; //表头
                            let tdBodys = ''; //数据
                            series.forEach(function (item) {
                                //组装表头
                                tdHeads += `<td style="padding: 0 10px;background:#fafafa;height:30px">${item.name}</td>`;
                            });
                            let table = `<table border="1" style="width:100%;border-collapse:collapse;font-size:14px;text-align:center;border:1px solid #e8e8e8"><tbody><tr>${tdHeads} </tr>`;
                            for (let i = 0, l = axisData.length; i < l; i++) {
                                for (let j = 0; j < series.length; j++) {
                                    //组装表数据
                                    tdBodys += `<td style="height:30px">${ series[j].data[i][1]}</td>`;
                                }
                                table += `<tr style="height:24px"><td style="padding: 0 10px;height:30px">${axisData[i][0]}</td>${tdBodys}</tr>`;
                                tdBodys = '';
                            }
                            table += '</tbody></table>';
                            return table;
                        }
                    },
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'time',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#BFBFBF'
                    }
                },
                axisLabel: {
                    color: '#545454'
                }
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
            series:[]
        };
        chart.showLoading({color:'#5D3AB3',text:'图表正在加载！！！'});
        chart.clear();
        chart.setOption(option,true);
        this.chart = chart;
    }
    setEchartLine() {
        const chart = this.chart;
        let legend = [], dataAry = [];
        const contrastChartData = toJS(this.contrastChartData);
        const pointdataType = 'totalChange';
        contrastChartData.forEach(v => {
            legend.push(v.monitorPointNumber+'(mm)');
            dataAry.push({
                name: v.monitorPointNumber+'(mm)',
                type: 'line',
                smooth: true,
                symbol: "none",
                data: v[pointdataType]
            });
        });
        chart.hideLoading(); 
        chart.setOption({
            legend: {
                data: legend
            },
            series: dataAry
        });
        console.log('生成图表！！！')
    }
}

export default PointDetail;