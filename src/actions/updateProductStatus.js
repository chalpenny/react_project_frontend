export const updateProductStatus = (status, productId) => {
    
    return (dispatch) => {
        fetch(`http://localhost:3001/products/${productId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(status)}
        )
        .then(resp => resp.json())
        .then(product => dispatch({
            type: 'CHANGE_AVAILABILITY', 
            payload: product
            })
        ) 
    };
    
}  