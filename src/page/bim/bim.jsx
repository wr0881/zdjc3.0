import React, { Component } from 'react';
import Status from 'component/Status/status';

class Bim extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ width: '100%', height: '400px' ,overflow:'hidden'}}>
                <Status text='正在开发中.....'/>
            </div>
        );
    }
}

export default Bim;