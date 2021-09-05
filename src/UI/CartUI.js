import React from 'react';
import store from "../store";
import CartedProductItem from '../Components/CartedProductItem';
import { Link } from 'react-router-dom';

export class CartUI extends React.Component {
    state = {cartTotal:0,cartSavings:0,cartItemPriceTotal:0}
    unsubscribe = () => {};
    constructor(props) {
        super(props);
        this.handleCartChange = this.handleCartChange.bind(this);
    }
    calculateCartValues()
    {
        const cartedProducts = store.getState();
        const cartItemPriceTotal=(cartedProducts.reduce((a, b) => a + b.price*b.quantity,0));
        const cartSavings=(cartedProducts.reduce((a, b) => a + b.savedAmount,0));
        const cartTotal = cartItemPriceTotal - cartSavings;
        const newState={cartTotal,cartSavings,cartItemPriceTotal}
        this.setState(newState);
    }
    componentDidMount()
    {
        this.calculateCartValues();
        this.unsubscribe = store.subscribe(this.handleCartChange)
    }
    componentWillUnmount()
    {
        this.unsubscribe();
    }

    handleCartChange()
    {
        this.calculateCartValues();
    }
    
    renderTotalCartPricing()
    {
        return(<>
        <div className="px-4 flex justify-between font-semibold">
            <p>SubTotal :</p>
            <p>${(this.state.cartItemPriceTotal).toFixed(2)}</p>
        </div>
        <div className="px-4 flex justify-between font-semibold">
            <p>Savings : </p>
            <p>${(this.state.cartSavings).toFixed(2)}</p>
        </div>
        <div className="px-4 flex justify-between font-semibold">
            <p>Total Amount : </p>
            <p>${(this.state.cartTotal).toFixed(2)}</p>
        </div>
        </>);
    }
    renderCartItems()
    {
        const cartedProducts = store.getState();
        return (<ul className="px-2 my-2 divide-y divide-gray-200">
                    {cartedProducts.map(product => (
                            <CartedProductItem key={product.id} productToRender={product}></CartedProductItem>
                    ))}
                </ul>);
    }
    renderNoItemsInCart()
    {
        return (<>
        <div className="px-4 relative h-1/2 text-center justify-center">
            <span className="text-lg md:text-2xl absolute font-semibold inset-x-0 bottom-0">No items in cart, please check our <Link as={Link} to="/" className="no-underline rounded-lg bg-blue-500 py-2 px-3 text-white">Catalogue</Link> to order a delicious meal</span>
        </div>
        </>);
    }

    render() {
        const cartedProducts = store.getState();
        if(cartedProducts.length <= 0)
        {
            //No Items in cart render no items
            return (<>{this.renderNoItemsInCart()}</>);
        }
        return (<>
            {this.renderCartItems()}
            {this.renderTotalCartPricing()}
        </>);
    }
}