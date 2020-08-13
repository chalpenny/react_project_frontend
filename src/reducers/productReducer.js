export default function productsReducer(state = {products: []}, action) {
    switch(action.type) {
        case 'FETCH_PRODUCTS':
            return {products: action.payload}
        case 'BUY_PRODUCT':
            return {
                state
            }
        case 'SELL_PRODUCT':
            return {
                state
            }
        default:
            return state;
    }
}

