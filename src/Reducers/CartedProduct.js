import { updateSavings } from "../CalculateSavings"

export const CartedProduct = (id,name,price,quantity) => { return { id,name,price,quantity } }

export const AddToCart = (payload) => {
    return { type : 'Add-to-cart', payload}
}

export const RemoveFromCart = (payload) => {
    return { type : 'Remove-from-cart', payload}
}
const CartedProductReducer = (state=[],action) => {
    const cartedProducts = state;
    const found = cartedProducts.find(product => product.id === action.payload.id);
    switch(action.type){
        case 'Add-to-cart':
            if(found === undefined)
            {
                const newCartItem = {...action.payload,quantity:1,savedAmount:0}
                cartedProducts.push(newCartItem);
            }
            else
            {
                found.quantity=found.quantity+1;
            }
            updateSavings(state);
            return state;
        case 'Remove-from-cart':
            if(found === undefined)
            {
                //never appears but for fail safety
                const newCartItem = {...action.payload,quantity:1}
                cartedProducts.push(newCartItem);
            }
            else
            {
                if(found.quantity===1)
                {
                    state = cartedProducts.filter((item)=>(item.id!==found.id));
                }
                else
                {
                    found.savedAmount = 0;
                    found.quantity= (found.quantity===1)?found.quantity:found.quantity-1;
                }
            }
            updateSavings(state);
            return state;
        default:
            return state;
    }
}
export default CartedProductReducer