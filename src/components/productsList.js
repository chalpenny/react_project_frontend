import React, { Component } from 'react';

class productsList extends Component {
    info = () => {
        return this.props.info.map(ship => key={ship.id} )
    }

    render() {
        return (
            <div>
                {this.info()}
            </div>
        )
    }
}

export default productsList;