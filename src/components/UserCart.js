import React from 'react';
import { Link } from 'react-router-dom';


const UserCart = (props) => {

    let items = props.products.filter(item => item.available) 

    function handleBtnClick() {
        // <Link to={`/purchase-complete`}></Link>
      }

    return (
        <div>
            <div>
                {items.map(item => 
                    <h4 key={item.id}>{item.name}..................{item.cost_in_credits}</h4> )}
            <br></br>
            </div>
        <button onClick={handleBtnClick}> Complete Purchase </button>   
        </div>
    );

};

export default UserCart; 