import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ProductPage from './ProductPage';

class ProductsList extends Component {

    constructor() {
        super();
            this.state = {
            available: true
        };
    }
    
    
    handleBtnClick = () => {
        this.setState(previousState => {
            return {
                available: !previousState.available
            }
        })
    };  
            
    render() {
        console.log("prod list here")
        return (
            <div>
                {this.props.products.map(product => 
                <div key={product.id}> 
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                    <li>Avail?{this.state.available}</li>
                    <button onClick={this.handleBtnClick}>Buy</button>
                </div> )}
            </div>
    )};

};

export default ProductsList;