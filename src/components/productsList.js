import React, { Component } from 'react';

const ProductsList = (props) => {


    return (
        <div>
            {props.products.map(product => <li key={product.id}>{product.name}</li>)}
        </div>
    )
}

export default ProductsList;