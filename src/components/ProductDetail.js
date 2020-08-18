import React from 'react';

const ProductDetail = (props) => {

    return (
        <div>
            <h5>
                model: {props.product && props.product.model}<br></br>
                crew: {props.product && props.product.crew}<br></br>
                passengers: {props.product && props.product.passengers}<br></br>
                ship length: {props.product && props.product.length}<br></br>
                speed: {props.product && props.product.max_atmosphering_speed}<br></br>
                manufacturer: {props.product && props.product.manufacturer}<br></br>
                cost: {props.product && props.product.cost_in_credits}<br></br>
            </h5>
                
        </div>
    );

};

export default ProductDetail; 