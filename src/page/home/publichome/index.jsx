import React, { Component } from 'react';
import Header from './header/header';
import ProjectType from './projecttype';
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
                    <div className="loging-content">
                        <ProjectType />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Loging;