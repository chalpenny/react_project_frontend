import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateProductStatus } from '../actions/updateProductStatus';

class ProductPage extends Component {

     state = {
            available: true
    }

    handleBtnClick() {
        this.setState(PreviousState => { 
            return {
                available: !PreviousState.available }}, function () {
                this.props.updateProductStatus(this.state, this.props.product.id)
        });
        alert("This item has been added to your cart");  
    }

    
    render() {
        return (
            <div>
                <br></br>
                <button className= "btn green" onClick={this.handleBtnClick.bind(this)}>Buy</button>
            </div>
    )};
}


export default connect(null, {updateProductStatus})(ProductPage);