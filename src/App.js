import React, { Component } from 'react';
// import { connect } from 'react-redux';
import ProductsContainer from './containers/ProductsContainer';
// import { fetchProducts } from './actions/productActions';

import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <ProductsContainer />
      </div> 
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     name: state.name
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchProducts: () => dispatch(fetchProducts())
//   }
// }


export default (App);
