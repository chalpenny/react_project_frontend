import React, { Component } from 'react';
import { connect } from 'react-redux';
import productsList from './components/productsList';
import { fetchProducts } from './actions/productActions';

import './App.css';

class App extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchProducts()
  }

  render() {
    return (
      <div className="App">
        <productsList info={this.props.info}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
