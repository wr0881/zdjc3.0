import React, { Component } from 'react';
import Header from './header/header';
import ProjectType from './projecttype';
import Overview from './overview';
import './index.scss';

class Loging extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="loging" id='index'>
                <Header />
                <div className="loging-wrapper">
                    <div className="loging-content" style={{width:'1600px'}}>
                        <ProjectType />
                        <Overview />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Loging;