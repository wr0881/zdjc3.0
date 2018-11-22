import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from 'component/header/header';
import Nav from './Nav';
import Overview from 'page/overview/overview';
import Manage from 'page/manage/manage';
import Detail from 'page/Detail/Detail';
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
                <Header />
                <Nav className='nav' />
                <div className="layout-content">
                    <Switch>
                        <Route exact path={`${curUrl}/overview`} component={Overview} />
                        <Route exact path={`${curUrl}/manage`} component={Manage} />
                        <Route exact path={`${curUrl}/detail`} component={Detail} />
                        <Redirect from={`${curUrl}`} to={`${curUrl}/overview`} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Layout;