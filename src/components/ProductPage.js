import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateProductStatus } from '../actions/updateProductStatus';

class ProductPage extends Component {

    state = {
        available: true
    }

    handleBtnClick = () => {
        this.setState(state => ({
            available: !state.available
        }))
        // {debugger}
        this.props.updateProductStatus(this.state, this.props.available.id)
    };  


    render() {

        return (
            <div>
                <li>Avail?{this.state.available}</li>
                <br></br>
                <button available={this.state.available.toString()} onClick={this.handleBtnClick.bind(this)}>Buy</button>
            </div>
    )};
}

export default connect(null, {updateProductStatus})(ProductPage);