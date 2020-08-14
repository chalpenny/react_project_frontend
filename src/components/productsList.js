import React, { Component } from 'react';

class ProductsList extends Component {

    state = {
        available: true
    };


   handleClick = (event) => {
    console.log(event)
   };
    render() {
        return (
            <div>
                {this.props.products.map(product => 
                <>
                    <li key={product.id}>{product.name}</li>
                    {console.log(product)}
                    <button onClick={this.handleClick}>Buy</button>
                </>
                )}
            </div>
    )};

};

export default ProductsList;