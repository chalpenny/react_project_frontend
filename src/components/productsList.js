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
  

                    <div class="row">
                    <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                        <img src="images/sample-1.jpg"></img>
                        <span class="card-title">Card Title</span>
                        </div>
                        <div class="card-content" key={product.id}>
                            <Link to={`/products/${product.id}`}>{product.name}</Link>
                            <li>Avail?{product.available.toString()}</li>
                        </div>
                        <div class="card-action">
                        <a href="#">This is a link</a>
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