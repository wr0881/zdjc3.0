import { observable, computed, autorun, toJS, action } from 'mobx';
import axios from 'axios';
import { message } from 'antd';
import moment from 'moment';
import pageData from 'store/page.js';
import { getTime } from 'common/js/util.js';

class Monitor {
    /* DataMonitor */
    /* 用户选择数据 */
    @observable selectPoint = {};
    @observable selsectTime = [moment(getTime('day3')[0]), moment(getTime('day3')[1])];
    //@observable selsectTimeNBWY = [moment(getTime('month')[0]), moment(getTime('month')[1])];
    @observable selectDeep = '';
    /* 接口数据 */
    @observable blueprintData = [];
    @observable pointDetailData = {};
    @observable mapEchartData = {};
    @observable mapEchartDataNBWY = {};
    /* ui数据 */
    @observable timeselectLoading = false;
    @observable isShowMapChart = false;
    @observable isShowMapChartNBWY = false;
    @observable dataContrastVisible = false;
    @computed get selectPointList() {
        let ary = [];
        let blueprintData = toJS(this.blueprintData);
        blueprintData.length && blueprintData.forEach(v => {
            if (v.monitorPoints) {
                ary = [...ary, ...v.monitorPoints];
            }
        })
        return ary;
    }

    /* DataConstrast */
    /* 用户选择数据 */
    @observable sectorId = 9;
    @observable monitorTypeName = '';
    @observable selectPointName = [];
    @observable timeType = 'month';

    @observable timeTypeSBWY = []; //深部位移选择的时间
    @observable pointdataType = '';
    /* 接口数据 */
    @observable monitorTypeData = [];
    @observable pointNameData = [];
    @observable contrastChartData = [];
    @observable contrastChartDataSBWY = []; //深部位移接口数据
    /* ui数据 */
    @observable getEchartDataLoading = false;

    //布点图测点详细信息
    @action getPointDetailData() {
        const selectPoint = this.selectPoint;

        axios.get('/sector/queryTerminalAndSensor', {
            headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNqqVspMLFGyMjQ1NTQ2MjK2tNBRSixNUbJSKk9NUtJRSq0ogEmaGIIkS4tTi_wSc1OBKopLC1KLElNyM_OUagEAAAD__w.TRH7E2NyAL2HhXXIbTUwJOEHtzd3NxyWY2WMlnKt-2I'},
            params: {
                sectorId: 9,
                monitorType: selectPoint.monitorType,
                monitorPointNumber: selectPoint.monitorPointNumber
            }
        }).then(res => {
            const { code, msg, data } = res.data;
            if (code === 0 || code === 2) {
                if (data) {
                    this.pointDetailData = data;
                }
            } else {
                this.pointDetailData = {};
                this.isShowMapChart = false;
                console.log('/sector/queryTerminalAndSensor code: ', code, msg);
            }
        })
    }
    //布点图测点数据信息
    @action getMapEchartData() {
        const selectPoint = this.selectPoint;
        const selsectTime = this.selsectTime;
        axios.get('/sector/querySensorData', {
            headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNqqVspMLFGyMjQ1NTQ2MjK2tNBRSixNUbJSKk9NUtJRSq0ogEmaGIIkS4tTi_wSc1OBKopLC1KLElNyM_OUagEAAAD__w.TRH7E2NyAL2HhXXIbTUwJOEHtzd3NxyWY2WMlnKt-2I'},
            params: {
                sectorId: 9,
                monitorType: selectPoint.monitorType,
                monitorPointNumber: selectPoint.monitorPointNumber,
                beginTime: selsectTime[0].format('YYYY-MM-DD HH:mm:ss'),
                endTime: selsectTime[1].format('YYYY-MM-DD HH:mm:ss'),
            }
        }).then(res => {
            const { code, msg, data } = res.data;
            if (code === 0) {
                this.mapEchartData = data;
                this.isShowMapChart = true;
                this.timeselectLoading = false;
                //console.log(data);
                //内部位移深度
                if (data.sensorNumbers) {
                    this.selectDeep = data.sensorNumbers[0];
                }
            } else {
                this.isShowMapChart = false;
                this.timeselectLoading = false;
                message.info(msg);
            }
        })
    }
    //内部位移echarts图表数据
    // @action getMapEchartDataNBWY() {
    //     const selectPoint = this.selectPoint;
    //     const selsectTime = this.selsectTime;
    //     if(selectPoint.monitorType === 66 || 26){
    //     axios.get('/data/queryDeepData', {
    //         params: {
    //             sectorId: pageData.sector.sectorId,
    //             monitorType: selectPoint.monitorType,
    //             monitorPointNumber: selectPoint.monitorPointNumber,
    //             sensorNumber: this.selectDeep,
    //             beginTime: selsectTime[0].format('YYYY-MM-DD HH:mm:ss'),
    //             endTime: selsectTime[1].format('YYYY-MM-DD HH:mm:ss'),
    //         }

    //     }).then(res => {
    //         const { code, msg, data } = res.data;
    //         if (code === 0) {
    //             this.mapEchartDataNBWY = data;
    //             //console.log(data);
    //             this.isShowMapChartNBWY = true;
    //             this.timeselectLoading = false;
    //         } else {
    //             this.isShowMapChartNBWY = false;
    //             this.timeselectLoading = false;
    //             message.info(msg);
    //         }
    //     })
    //     }
    // }

    //数据对比监测指标
    @action getMonitorTypeData() {
        axios.get('/common/queryMonitorTypeName', {
            headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNqqVspMLFGyMjQ1NTQ2MjK2tNBRSixNUbJSKk9NUtJRSq0ogEmaGIIkS4tTi_wSc1OBKopLC1KLElNyM_OUagEAAAD__w.TRH7E2NyAL2HhXXIbTUwJOEHtzd3NxyWY2WMlnKt-2I'},
            params: {
                sectorId: 9
            }
        }).then(res => {
            const { code, msg, data } = res.data;
            if (code === 0) {
                this.monitorTypeData = data;
            } else {
                this.monitorTypeData = [];
                console.log('/common/queryMonitorTypeName code: ', code, msg);
            }
        })
    }
    //数据对比监测测点
    @action getPointName() {
        axios.get('/point/queryMonitorPointName', {
            headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNqqVspMLFGyMjQ1NTQ2MjK2tNBRSixNUbJSKk9NUtJRSq0ogEmaGIIkS4tTi_wSc1OBKopLC1KLElNyM_OUagEAAAD__w.TRH7E2NyAL2HhXXIbTUwJOEHtzd3NxyWY2WMlnKt-2I'},
            params: {
                sectorId: 9,
                monitorType: this.monitorTypeName
            }
        }).then(res => {
            const { code, msg, data } = res.data;
            if (code === 0) {
                this.pointNameData = data;
            } else {
                this.pointNameData = [];
                console.log('/point/queryMonitorPointName code: ', code, msg);
            }
        })
    }
    //数据对比echart图表数据
    @action getEchartData() {
        let beginTime = '', endTime = '';
        beginTime = getTime(this.timeType)[0];
        endTime = getTime(this.timeType)[1];
        axios.get('/sector/queryComparisonData', {
            headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNqqVspMLFGyMjQ1NTQ2MjK2tNBRSixNUbJSKk9NUtJRSq0ogEmaGIIkS4tTi_wSc1OBKopLC1KLElNyM_OUagEAAAD__w.TRH7E2NyAL2HhXXIbTUwJOEHtzd3NxyWY2WMlnKt-2I'},
            params: {
                sectorId: 9,
                monitorType: this.monitorTypeName,
                pointNames: JSON.stringify(this.selectPointName),
                beginTime: beginTime,
                endTime: endTime,
                dateType: 1
            }
        }).then(res => {
            const { code, msg, data } = res.data;
            if (code === 0 || code === 2) {
                this.contrastChartData = data.comparisonVO;
                this.getEchartDataLoading = false;
            } else {
                this.contrastChartData = [];
                this.getEchartDataLoading = false;
                console.log('/sector/queryComparisonData code: ', code, msg);
            }
        })
    }
}

const monitor = new Monitor();

autorun(() => {
    const selectPoint = toJS(monitor.selectPoint);
    if (JSON.stringify(selectPoint) !== '{}') {
        monitor.getPointDetailData();
        monitor.getMapEchartData();
    }
})

autorun(() => {
    const selectDeep = toJS(monitor.selectDeep);
    if (selectDeep !== '') {
        monitor.getMapEchartDataNBWY();
    }
})

export default monitor;