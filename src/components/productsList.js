import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ProductsList extends Component {      
    
    showAvailability() {
        return this.props.products.available ? "This product is currently unavailable" : null
    }

    render() {
        return (
            <div>
                {this.props.products.map(product => 

                    <div className="row" key={product.id}>
                    <div className="col s12 m7">
                    <div className="card">
                        <span className="card-title"><Link to={`/products/${product.id}`}>{product.name}</Link></span>
                        <div className="card-image">
                        <img src="/images/SpaceWarfare-SWGMB.jpg" alt='ships in space placeholder'></img>
                        </div>
                        <div className="card-action, card-content" >
                            <ul className="card red white-text">{this.showAvailability()}</ul>
                        </div>
                        {/* <div className="card-action">
                        <a href="#">This is a link</a>
                        </div> */}
                    </div>
                    </div>
                    </div>
                )}
            </div>
        );
    };

};

export default ProductsList;