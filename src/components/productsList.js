import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ProductsList extends Component {      
    
    showAvailability(product) {
        if (!product.available) {
            return <ul className="card red white-text">This product is currently unavailable</ul>}
        else {return null}
    }

    render() {
        return (
            <div>
                {this.props.products.map(product => 

                    <div className="row" key={product.id}>
                        <div className="col s12 m7">
                            <div className="card">
                                <span className="card-title"><Link to={`/products/${product.id}`}>{product.name}</Link></span>
                                <br></br>
                                <span className="card-content green-text">{product.cost_in_credits} credits</span>
                                <div className="card-image">
                                <img src="/images/SpaceWarfare-SWGMB.jpg" alt='ships in space placeholder'></img>
                                </div>
                                <div className="card-action, card-content"> 
                                <ul className="card red white-text">{this.showAvailability(product)}</ul>
                            </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

};

export default ProductsList;