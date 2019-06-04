import React, { Component } from 'react';
import { Modal, Badge, Icon } from 'antd';
import { observer } from 'mobx-react';
import PointMap from './pointMap';
import PointDetail_NM from './pointDetail/pointDetail_NM';
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
                <PointMap />
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