import React, { Component } from 'react';
import { Tree } from 'antd';
import './blueprint.scss';

const TreeNode = Tree.TreeNode;

const data = [
    {
        key: Math.random(),
        title: '布点图',
        children: [
            {
                key: Math.random(),
                title: '布点图1',
            },
            {
                key: Math.random(),
                title: '布点图2',
            },
            {
                key: Math.random(),
                title: '布点图3',
            },
            {
                key: Math.random(),
                title: '布点图4',
            }
        ]
    },
    {
        key: Math.random(),
        title: '剖面图',
        children: [
            {
                key: Math.random(),
                title: '剖面图1',
            },
            {
                key: Math.random(),
                title: '剖面图2',
            },
            {
                key: Math.random(),
                title: '剖面图3',
            },
            {
                key: Math.random(),
                title: '剖面图4',
            }
        ]
    },
    {
        key: Math.random(),
        title: '现场图',
        children: [],
    },
]

class BluePrint extends Component {
    render() {
        const loop = data => data.map(value => {
            if (value.children && value.children.length !== 0) {
                return <TreeNode key={value.title} title={value.title} disabled>{loop(value.children)}</TreeNode>
            } else if (value.children && value.children.length === 0) {
                return <TreeNode key={value.title} title={value.title} disabled />
            } else {
                return <TreeNode key={value.title} title={value.title} />
            }
        });
        return (
            <div className="blueprint">
                <div className="blueprint-operate">
                    <Tree
                        defaultExpandAll
                        onSelect={(v, e) => { console.log(e) }}
                    >
                        {loop(data)}
                    </Tree>
                </div>
                <div className="blueprint-img">
                    <img src="http://attach.bbs.miui.com/forum/201807/17/154537ujxutueesyj3mzt0.jpg" alt=""/>
                </div>
            </div>
        );
    }
}

export default BluePrint;