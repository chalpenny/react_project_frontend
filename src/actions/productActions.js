export function fetchProducts()   {
    return (dispatch) => {
        fetch('http://localhost:3001/products')
        .then(resp => resp.json())
        .then(data => dispatch ({
            type: 'FETCH_PRODUCTS',
            payload: data
            })
        )
        
    }
}