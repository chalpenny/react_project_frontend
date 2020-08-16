import React, { Component } from 'react';

class ProductPage extends Component {

    constructor(props) {
        super(props);
            this.state = {
            available: true
        };
      }



    render() {
        console.log("produits")

        return (
            <div>
                {this.props.product.name}
            </div>
    )};

};

export default ProductPage;