import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
	<div>
	<button onClick={() => {
          alert('you know how to handle onclick event')
        }}>Hello World!</button> number:0
	</div>
    );
  }
}

export default App;
