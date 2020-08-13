import React, { Component } from 'react';
import ProductsList from '../components/ProductsList';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';

class ProductsContainer extends Component {

        componentDidMount() {
            this.props.fetchProducts()
        }


    render() {
        return (
            <div>
                <ProductsList products={this.props.products}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }

}


export default connect(mapStateToProps, {fetchProducts})(ProductsContainer);