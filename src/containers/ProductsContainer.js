import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductsList from '../components/ProductsList';
import ProductPage from '../components/ProductPage';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';

class ProductsContainer extends Component {

        componentDidMount() {
            this.props.fetchProducts()
        }


    render() {
        return (
            <div>
                <Switch>
                    <Route path='/products/:id' render={(routerProps) => <ProductPage {...routerProps} products={this.props.products}/> } />            
                    <Route exact path='/products' render={(routerProps) => <ProductsList {...routerProps} products={this.props.products}/> } />
                </Switch>
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