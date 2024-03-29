import React, { Component, Fragment } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import Home from 'page/home/loging/index';
import Login from 'page/Login/Login';
import PublicHome from 'page/home/publichome/index';

@withRouter
@observer
class Root extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='' component={PublicHome} />
                    <Route path='/home' component={Home} />
                    
                </Switch>
            </Fragment>
        );
    }
    componentDidMount() {
        // //不需要登陆验证的页面;
        // const publicList = ['/login', '/index'];
        // const pathname = this.props.location.pathname;
        // if (publicList.indexOf(pathname) > -1) {
        //     return null;
        // }
        // //需要登陆验证的页面;
        // const token = window.localStorage.getItem('token');
        // if (token !== 'null') {
        //     axios.defaults.headers.common['Authorization'] = token;
        //     user.isLogin = true;
        //     this.props.history.push('/home');
        // } else {
        //     this.props.history.push('/index');
        // }
    }
}

export default Root;
