import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Card from 'component/Card/Card';
import Chart from './chart';
import iconRinghtImg from 'common/image/向右箭头2.png';
import './overview.scss';

@withRouter
class overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resourceData: {},
            projectListData: []
        }
    }
    render() {
        return (
            <div className="overview">
                <div className="overview-project">
                    <div className='overview-project-content'>                            
                        <Card
                            key={Math.random()}
                            icon={<div style={{ width: '8px', height: '8px', backgroundColor: '#32D184', borderRadius: '50%' }}></div>}
                            operate={
                                <div className="overview-project-item-operate" >
                                    <div style={{ marginTop: '7px', marginLeft: '7px' }}><img src={iconRinghtImg} alt="" /></div>
                                </div>
                            }
                            text='长丰路站'
                            className='overview-project-item'
                        >
                            <div className="overview-item-content">
                                <div className="overview-item-title">项目描述</div>
                                <div className="overview-item-dec">地铁长丰路站监测项目</div>
                                <div className="overview-item-chart-wrapper">
                                    <div className="overview-item-chart-dec">
                                        <div>566</div>
                                        <div>总预警(次)</div>
                                    </div>
                                    <div className="overview-item-chart">
                                        <Chart />
                                    </div>
                                </div>
                            </div>
                        </Card>
                            
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.getProjectList();
    }
    
    getProjectList() {
        axios.get('/project/queryMonitorView', {
            headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNqqVspMLFGyMjQ1NTQ2MjK2tNBRSixNUbJSKk9NUtJRSq0ogEmaGIIkS4tTi_wSc1OBKopLC1KLElNyM_OUagEAAAD__w.TRH7E2NyAL2HhXXIbTUwJOEHtzd3NxyWY2WMlnKt-2I'},
            params: {
                scId: 9
            }
        }).then(res => {
            const { code, msg, data } = res.data;
            if (code === 0) {
                this.setState({ projectListData: data });
                console.log(this.state.projectListData);
            } else {
                this.setState({ projectListData: [] });
                console.log('/project/queryMonitorView code: ', code, msg);
            }
        })
    }
}

export default overview;