const productsReducer = (state = products = []), action) => {
    switch(action.type) {
        case 'LOADING':
            return {
                state
            }
        case 'BUY_SHIP':
            return {
                state
            }
        case 'SELL_SHIP':
            return {
                state
            }
        default:
            return state;
    }
}

export default productsReducer;