import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {number:this.props.num}
	addValue = ()=>{this.setState({number:this.state.number*2})}
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
