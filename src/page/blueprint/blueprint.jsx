import React, { Component } from 'react';
import axios from 'axios';
import { Tree } from 'antd';
import pagedata from 'store/page.js';
import './blueprint.scss';

const TreeNode = Tree.TreeNode;

class BluePrint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageData: [],
            imgInfo: {}
        }
    }
    render() {
        const { imageData ,imgInfo} = this.state;
        const loop = data => data.map(value => {
            if (value.images && value.images.length !== 0) {
                return <TreeNode key={value.imageType} title={value.imageType} disabled>{loop(value.images)}</TreeNode>
            } else if (value.children && value.children.length === 0) {
                return <TreeNode key={value.imageType} title={value.imageType} disabled />
            } else {
                return <TreeNode key={value.imageListId} title={value.imageName} id={value.imageListId} />
            }
        });
        return (
            <div className="blueprint">
                <div className="blueprint-operate">
                    <Tree
                        key={Math.random()}
                        defaultExpandAll
                        onSelect={this.getSelectImgInfo.bind(this)}
                    >
                        {loop(imageData)}
                    </Tree>
                </div>
                <div className="blueprint-img">
                    <img src={`${window.Psq_ImgUrl}${imgInfo.imageUrl}`} alt="" />
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.getImageData();
    }
    getImageData() {
        axios.get('/sector/queryImageNames', {
            params: {
                sectorId: pagedata.sector.sectorId
            }
        }).then(res => {
            const { code, msg, data } = res.data;
            if (code === 0) {
                this.setState({ imageData: data });
            } else {
                this.setState({ imageData: [] });
                console.log('/sector/queryImageNames code: ', code, msg);
            }
        }).catch(err => { alert(err) });
    }
    getSelectImgInfo(key,e) {
        const { id } = e.selectedNodes[0].props;
        axios.get('/sector/queryImage', {
            params: {
                imageListId: id,
                imageType: 3
            }
        }).then(res => {
            const { code, msg, data } = res.data;
            if (code === 0) {
                this.setState({ imgInfo: data });
            } else {
                this.setState({ imgInfo: {} });
                console.log('/sector/queryImage code: ', code, msg);
            }
        }).catch(err => { alert(err) });
    }
}

export default BluePrint;