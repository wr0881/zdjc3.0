import React, { Component } from 'react';
import axios from 'axios';
import pagedata from 'store/page.js';
import './info.scss';

class BasicInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            basicInformation: {}
        }
    }
    render() {
        const basicInformation = this.state.basicInformation;
        return (
            <div className='basicInformation'>
                <div className="basicInformation-wrapper">
                    <div className="basicInformation-title">区间名称</div>
                    <div className="basicInformation-dec">{basicInformation.sectorName}</div>
                </div>
                <div className="basicInformation-wrapper">
                    <div className="basicInformation-title">项目概括</div>
                    <div className="basicInformation-dec">{basicInformation.sectorDescription}</div>
                </div>
                <div className="basicInformation-wrapper">
                    <div className="basicInformation-title">区间类型</div>
                    <div className="basicInformation-dec">{basicInformation.sectorType}</div>
                </div>
                <div className="basicInformation-wrapper">
                    <div className="basicInformation-title">区间地址</div>
                    <div className="basicInformation-dec">{basicInformation.sectorAddress}</div>
                </div>
                <div className="basicInformation-wrapper">
                    <div className="basicInformation-title">区间起始时间</div>
                    <div className="basicInformation-dec">{basicInformation.sectorTime}</div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.getBasicInformation();
    }
    getBasicInformation() {
        axios.get('/project/querySector', {
            params: {
                sectorId: pagedata.sector.sectorId
            }
        }).then(res => {
            const { code, msg, data } = res.data;
            if (code === 0) {
                this.setState({ basicInformation: data });
            } else {
                console.log('/project/querySector: ', code, msg);
            }
        }).catch(err => { alert(err) });
    }
}

export default BasicInformation;