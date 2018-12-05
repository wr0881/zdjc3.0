import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { observer } from 'mobx-react';
import page from 'store/page.js';
import './typeitem.scss';

@withRouter
@observer
class TypeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    static defaultProps = {
        isClick: true,
        data: {
            scId: 0,
            itemName: 'test',
            itemValue: '0',
            projectTotalCount: 0,
            projectErrorCount: 0,
        }
    }
    render() {
        const { data } = this.props;
        return (
            <div className={classnames('typeitem')}
                onClick={this.projectTypeClick.bind(this)}
            >
                <div className="typeitem-logo"><img src={data.itemValue} alt="" /></div>
                <div className="typeitem-title">{data.itemName}</div>
                <div className="typeitem-icon"></div>
                <div className="typeitem-projectdec">
                    <div>总项目数 {data.projectTotalCount}</div>
                    <div>异常项目数 {data.projectErrorCount}</div>
                </div>
            </div>
        );
    }
    projectTypeClick() {
        const { isClick, data } = this.props;
        if (isClick && data.projectTotalCount) {
            page.projectType = { projectTypeId: data.scId, projectTypeName: data.itemName }
            this.props.history.push('/project/overview');
        }
    }
}

export default TypeItem;