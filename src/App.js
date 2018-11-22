import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import Nologinhome from './page/home/nologin/index';
import Loging from './page/home/loging/index';
import Layout from './page/Layout/Layout';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

class App extends Component {
  render() {
    return (
      <Fragment>
        <LocaleProvider locale={zhCN}>
          <BrowserRouter>
            <Switch>
              <Route exact path='/none1' component={Nologinhome} />
              <Route exact path='/home' component={Loging} />
              <Route path='/project' component={Layout} />
              <Redirect to='/home' />
            </Switch>
          </BrowserRouter>
        </LocaleProvider>
      </Fragment>
    );
  }
}

export default App;
