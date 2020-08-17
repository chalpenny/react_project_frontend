import React from 'react';
import ProductPage from '../components/ProductPage';
import ProductDetail from '../components/ProductDetail'


const ProductPageContainer = (props) => {

    let prod = props.products[props.match.params.id - 1]


        return (
            <>
                <h2>
                    {prod ? prod.name : null}
                </h2>
                <ProductPage available={props.available}/>
                <ProductDetail/>
            </>

    )
};

export default ProductPageContainer; 