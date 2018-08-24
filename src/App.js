import React, { Component } from 'react';
import RouterMap from './router';
/**
 * 可观察的状态 observable  state   
 * 计算值 computed values
 * 反应  reactions
 */
import { Provider } from 'mobx-react';
import stores from './stores';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <RouterMap></RouterMap>
      </Provider>
    );
  }
}

export default App;
