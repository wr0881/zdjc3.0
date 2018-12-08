import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from 'component/Auth/Auth';
import Header from 'component/header/header';
import Nav from './Nav';
import Overview from 'page/overview/overview';
import Manage from 'page/manage/manage';
import Detail from 'page/Detail/Detail';
import Bim from 'page/bim/bim';
import './Layout.scss';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const curUrl = this.props.match.url;
        return (
            <div className="layout">
                <Auth />
                <Header />
                <Nav className='nav' />
                <div className="layout-content">
                    <Switch>
                        <Route exact path={`${curUrl}/overview`} component={Overview} />
                        <Route exact path={`${curUrl}/manage`} component={Manage} />
                        <Route exact path={`${curUrl}/manage/detail`} component={Detail} />
                        <Route exact path={`${curUrl}/bim`} component={Bim} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Layout;