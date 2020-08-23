import React from 'react';
import { withRouter } from "react-router-dom";


const UserCart = (props) => {

    let items = props.products.filter(item => item.available) 

    function handleBtnClick() {
        props.history.push(`/purchase-complete`) 
      }
       
    return (
        <div>
            <div>
                <h3>ITEM---------------------PRICE</h3>
                {items.map(item => 
                    <h4 key={item.id}>{item.name}..................{item.cost_in_credits}</h4> )}
            <br></br>
            </div>
        <button onClick={handleBtnClick}>Complete Purchase</button>   
        </div>
    );

};

export default withRouter(UserCart); 