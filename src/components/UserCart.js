import React from 'react';
import { withRouter } from "react-router-dom";


const UserCart = (props) => {

    let items = props.products.filter(item => item.available) 

    let total = 0

    function handleBtnClick() {
        props.history.push(`/purchase-complete`) 
      }
       
    return (
        <div>
            <div>
                <h4>ITEM---------------------PRICE</h4>
                {items.map(item => 
                    <h5 key={item.id}>{item.name}..................{item.cost_in_credits}</h5> )}
            <br></br>
            </div>
        <button class="btn indigo" onClick={handleBtnClick}>Complete Purchase</button>   
        </div>
    );

};

export default withRouter(UserCart); 