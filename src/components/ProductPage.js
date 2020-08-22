import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateProductStatus } from '../actions/updateProductStatus';

class ProductPage extends Component {

    // constructor(props) {
    //     debugger
    //     super(props);
    //     this.state = {
    //     available: props.product.available ? props.product.available : null
    //     }
    // };

     state = {
            available: true
    }

    handleBtnClick = () => {
        this.setState(PreviousState => {
            return {
            available: !PreviousState.available}
        })
        this.props.updateProductStatus(this.state, this.props.product.id)
    };  


    // showAvailability = () => {
    //     // debugger
    //     this.props.products.available ? this.props.products.available : null }; 

    render() {
// debugger
        return (
            <div>
                {/* <li>Avail?{ product.available.toString()}</li> */}
                <br></br>
                <button available={this.state.available.toString()} onClick={this.handleBtnClick.bind(this)}>Buy</button>
            </div>
    )};
}


export default connect(null, {updateProductStatus})(ProductPage);