import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'common/js/axios.config.js';
import Login from 'page/Login/Login';
import Home from './page/home/loging/index';
import AlarmSimple from './page/alarmsimple/alarmsimple';
import Layout from './page/Layout/Layout';
import Auth from 'component/Auth/Auth';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <LocaleProvider locale={zhCN}>
          <Fragment>
            <Auth />
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/home' component={Home} />
              <Route path='/alarmsimple' component={AlarmSimple} />
              <Route path='/project' component={Layout} />
            </Switch>
          </Fragment>
        </LocaleProvider>
      </BrowserRouter>
    );
  }
}

export default App;
