export const CartedProduct = (id,name,price,quantity) => { return { id,name,price,quantity } }

export const AddToCart = (payload) => {
    return { type : 'Add-to-cart', payload}
}

const CartedProductReducer = (state=[],action) => {
    switch(action.type){
        case 'Add-to-cart':
        const cartedProducts = state;        
        const found = cartedProducts.find(product => product.id === action.payload.id);
        if(found === undefined)
        {
            const newCartItem = {...action.payload,quantity:1}
            cartedProducts.push(newCartItem);
        }
        else
        {
            found.quantity=found.quantity+1;
        }
            return state;
        default:
            return state;
    }
}
export default CartedProductReducer