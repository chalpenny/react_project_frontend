import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductsList from '../components/ProductsList';
import ProductPageContainer from './ProductPageContainer';
import HomePage from '../components/HomePage';
import UserCart from '../components/UserCart';
import ConfirmationPage from '../components/ConfirmationPage';

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
                    <Route path='/products/:id' render={(routerProps) => <ProductPageContainer {...routerProps} products={this.props.products}/> } />            
                    <Route path='/products' render={(routerProps) => <ProductsList {...routerProps} products={this.props.products}/> } />

                    <Route path='/cart' render={(routerProps) => <UserCart {...routerProps} products={this.props.products}/> } />
                    <Route path='/purchase-complete' render={(routerProps) => <ConfirmationPage {...routerProps} products={this.props.products}/> } />
                    <Route path='/' render={(routerProps) => <HomePage {...routerProps} products={this.props.products}/> } />
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