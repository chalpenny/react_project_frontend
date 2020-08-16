import React, { Component } from 'react';
import { Route  } from 'react-router-dom';
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

    handleNameClick = (event) => {
        console.log(event.target.innerText)
        {debugger}
        return (
            <div>
                <> 
                <Route path={'/products/${product.id'} render={(routerProps) => <ProductPage {...routerProps} products={this.props.products}/> } />            
                </>
            </div>
        )
    };
            
    render() {
        console.log("here")
        return (
            <div>
                {this.props.products.map(product => 
                <div key={product.id}> 
                    <li  onClick={this.handleNameClick}><ProductPage product={product}/></li>
                    <li>Avail?{this.state.available}</li>
                    <button onClick={this.handleBtnClick}>Buy</button>
                </div>
                )}
            </div>
    )};

};

export default ProductsList;