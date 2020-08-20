export default function productsReducer(state = {products: []}, action) {
    // debugger;
    switch(action.type) {
        case 'FETCH_PRODUCTS':
            return {products: action.payload}
        case 'CHANGE_AVAILABILITY':
            return {...state, products: [...state.products, action.payload]}
        default:
            return state;
    }
}