import React, { Component } from 'react';
import Header from 'component/header/header';
import Nav from './Nav';
import Overview from '../overview/overview';
import './Layout.scss';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="layout">
                <Header />
                <Nav className='nav' />
                <div className="layout-content">
                    <Overview />
                </div>
            </div>
        );
    }
}

export default Layout;