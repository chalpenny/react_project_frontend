import React, { Component } from 'react';

const ProductPage = (props) => {
    {console.log("product page?")}


    let prod = props.products[props.match.params.id - 1]
    console.log(prod)

        return (
            <div>
                {prod ? prod.name : null}
            </div>
    )
};

export default ProductPage; 