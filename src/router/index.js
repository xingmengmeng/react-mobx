import React, { Component } from 'react';
import { BrowserRouter, Route, Switch ,Link} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
export default class RouterMap extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="allWrap">
                    <Link to='/home'>首页</Link>
                    <Link to='/login'>登录</Link>
                    <Switch>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/login' component={Login}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
            // 一个文件路由  只能在主路由中有一个browserRouter  路由的根级
        )
    }
}