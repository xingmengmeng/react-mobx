import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
export default class RouterMap extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="allWrap">
                    <Switch>
                        <Route path='/home' component={Home}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
            // 一个文件路由  只能在主路由中有一个browserRouter  路由的根级
        )
    }
}