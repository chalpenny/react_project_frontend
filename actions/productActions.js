export const fetchProducts = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING'})
        fetch('http://localhost:3000/products')
        .then(resp => {return resp.json()
        }).then(respJSON => {
            dispatch({ type: 'BUY_SHIP', products: responseJSON.name })
        })
    }
}