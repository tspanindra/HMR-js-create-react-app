import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    counter : 0
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is cool and i don't have to reload. Welcome to React and check the hmr</h1>
        </header>
        <h2> The Counter value is : { this.state.counter } </h2>
        <p className="App-intro">
          <button onClick= {() => {
            this.setState({counter: this.state.counter + 1})
          }}> Increment
          </button>
        </p>
      </div>
    );
  }
}

export default App;
