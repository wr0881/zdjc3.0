import React, { Component } from 'react';
import { Modal, Badge, Icon } from 'antd';
import { observer } from 'mobx-react';
import PointDetail_NM from './pointDetail_NM';
import DataContrast from './dataContrast';
import monitorpage from 'store/monitorpage.js';
import './monitor.scss';

@observer
class DataMonitorContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className='dataMonitor-wrapper'>
                
                {/* <PointMap /> */}
                <PointDetail_NM />
                <Modal
                    key='dataAnalyse'
                    title={<div className='user-change-pwd'>数据对比</div>}
                    visible={monitorpage.dataContrastVisible}
                    destroyOnClose={true}
                    footer={null}
                    width='1200px'
                    bodyStyle={{ padding: '0px' }}
                    // onOk={this.handleOk}
                    onCancel={_ => { monitorpage.dataContrastVisible = false }}
                >
                    <DataContrast />
                </Modal>
            </div>
        );
    }
    componentWillMount() {
        monitorpage.selectPoint = {};

        // this.socket = setInterval(_=>{monitorpage.getMapEchartData()},1000);
    }
    // componentWillUnmount(){
    //     clearInterval(this.socket);
    // }
}

export default DataMonitorContainer;