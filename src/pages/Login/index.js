import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './index.less';

@inject('clickTime')
@observer
class Login extends Component {
    render() {
        return (
            <div className="login">
                <h5>登录</h5>
                <span onClick={this.props.clickTime.click.bind(this, 2)}>
                    点击+2后的值为：{this.props.clickTime.times}
                </span>
            </div>
        )
    }
}
export default Login;