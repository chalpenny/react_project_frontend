import React, { Component } from 'react';
import { connect } from 'react-redux';
import productsList from './productsList';
import './App.css';

class App extends Component {

  componentDidMount() {
    console.log("hi from App")
  }

  render() {
    return (
      <div className="App">
        <productsList info={this.props.info} >
      </div>
    );
  }
}

export default App;
