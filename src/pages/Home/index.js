import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './index.less';

@inject('clickTime')
@observer
class Home extends Component {
    render() {
        return (
            <div className="homeWrap">
                <span onClick={this.props.clickTime.click.bind(this, 2)}>
                    点击+2后的值为：{this.props.clickTime.times}
                </span>
            </div>
        )
    }
}
export default Home;