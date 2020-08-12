export function fetchProducts()   {
    // return (dispatch) => {
        // dispatch({ type: 'LOADING'})
        fetch('http://localhost:3001/products')
        .then(resp => resp.json())
        .then(data => console.log(data))
            // dispatch({ type: 'BUY_SHIP', products: resp.name })
        // )
    // }
}