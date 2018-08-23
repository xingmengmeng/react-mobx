import React, { Component } from 'react';
import { observable } from "mobx";
import './App.css';


class Todo {
  id = Math.random();
  @observable title = "";
  @observable finished = false;
}

class App extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="App">
        hello!
      </div>
    );
  }
}

export default App;
