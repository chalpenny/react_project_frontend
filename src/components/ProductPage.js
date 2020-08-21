import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateProductStatus } from '../actions/updateProductStatus';

class ProductPage extends Component {

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

    showAvailability = () => {

        {debugger}
    }

    render() {

        return (
            <div>
                <li>Avail?{this.props.available}</li>
                <br></br>
                <button available={this.state.available.toString()} onClick={this.handleBtnClick.bind(this)}>Buy</button>
            </div>
    )};
}


export default connect(null, {updateProductStatus})(ProductPage);