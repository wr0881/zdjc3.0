import React, { Component } from 'react';
import classnames from 'classnames';
import './typeitem.scss';

class TypeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    static defaultProps = {
        ismonitor: false
    }
    render() {
        const { ismonitor } = this.props;
        return (
            <div className={classnames('typeitem', { 'typeitem-active': ismonitor })}>
                <div className="typeitem-logo"><img src="" alt="" /></div>
                <div className="typeitem-title">地铁</div>
                <div className="typeitem-icon"></div>
                <div className="typeitem-projectdec">
                    <div>总项目数852</div>
                    <div>异常项目数349</div>
                </div>
            </div>
        );
    }
}

export default TypeItem;