import React, { Component } from 'react';
// import ProductDetail from './ProductDetail'

class ProductPage extends Component {

    constructor(props) {
        super(props);
            this.state = {
            available: true
        };
    }

    handleBtnClick = () => {
        console.log("clicked")
    };  


    render() {
        return (
            <div>
                ProductPageContainer
               
                <br></br><button onClick={this.handleBtnClick}>Buy</button>

            </div>
    )};
}

export default ProductPage;