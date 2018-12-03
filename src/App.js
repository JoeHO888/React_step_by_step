import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {number:0}
	addValue = ()=>{this.setState({number:1})}
  render() {
    return (
	<div>
	<button onClick={this.addValue	
        }>Hello World!</button> number:{this.state.number}
	</div>
    );
  }
}

export default App;
