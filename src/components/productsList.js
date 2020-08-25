import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ProductPageContainer from './ProductPage';
// import ProductDetail from './ProductDetail';

class ProductsList extends Component {      
    
    render() {
        return (
            <div>
                {this.props.products.map(product => 
            //     <div key={product.id}> 
            //         <Link to={`/products/${product.id}`}>{product.name}</Link>
            //         <li>Avail?{product.available.toString()}</li>
            //         {/* <br></br> */}
            //     </div> )}
  

                    <div className="row">
                    <div className="col s12 m7">
                    <div className="card">
                        <span className="card-title"><Link to={`/products/${product.id}`}>{product.name}</Link></span>
                        <div className="card-action, card-content" key={product.id}>
                            {/* <Link to={`/products/${product.id}`}>{product.name}</Link> */}
                            <ul class="card red white-text">Avail?{product.available.toString()}</ul>
                        </div>
                        <div className="card-image">
                        <img src="/images/SpaceWarfare-SWGMB.jpg" alt='ships in space placeholder'></img>
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