import React from 'react';
import ProductPage from '../components/ProductPage';
import ProductDetail from '../components/ProductDetail'


class ProductPageContainer extends React.Component {

    
    render() {

    let prod = this.props.products[this.props.match.params.id - 1]
    
    // debugger
    return (
        <div className='container'>
            <h2>
                {prod ? prod.name : null}
            </h2>
            <ProductDetail product={this.props.products && prod}/>
            <ProductPage product={prod}/>
        </div>

    )}
};

export default ProductPageContainer; 