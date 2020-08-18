import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ProductPageContainer from './ProductPage';
import ProductDetail from './ProductDetail';

class ProductsList extends Component {

    constructor(props) {
        super(props);
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

        return (
            <div>
                {this.props.products.map(product => 
                <div key={product.id}> 
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                    <li>Avail?{this.state.available} or not</li>
                    <button onClick={this.handleBtnClick}>Buy</button>
                </div> )}
            </div>
    )};

};

export default ProductsList;