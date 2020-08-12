export const fetchProducts = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING'})
        fetch('http://localhost:3001/products')
        .then(resp => {return resp.json()
        }).then(resp => {
            dispatch({ type: 'BUY_SHIP', products: resp.name })
        })
    }
}