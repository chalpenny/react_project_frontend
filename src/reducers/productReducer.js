export default function productsReducer(state = {products: []}, action) {

    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {products: action.payload}
        case 'CHANGE_AVAILABILITY':
            let products = state.products.map(product => {
                if (product.id === action.payload.id) {
                    return action.payload}
                    else {
                        return product
                    }
                })
            return {...state, products: products}
        default:
            return state;
    }
}