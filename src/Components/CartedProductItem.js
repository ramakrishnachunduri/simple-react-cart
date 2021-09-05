import React from "react";
import { AddToCart, RemoveFromCart } from "../Reducers/CartedProduct";
import store from "../store";

class CartedProductItem extends React.Component {
  constructor(productToRender) {
    super(productToRender);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleAddClick() {
    store.dispatch(AddToCart(this.props.productToRender));
  }

  handleRemoveClick() {
    store.dispatch(RemoveFromCart(this.props.productToRender));
  }

  renderSavingsAmount()
  {
    const currentProduct = this.props.productToRender;
    const foundOffer = currentProduct.offers.find(offer => offer.offerId === currentProduct.appliedOfferId);
    return (
      <>
      {currentProduct.savedAmount > 0 &&
        <div className="flex flex-wrap mr-1 border-b-2 py-1 justify-start md:justify-between">
          <div className="pl-3 py-0 text-sm">
            {( foundOffer !== undefined ) ? ((foundOffer.isOfferSpecial)?'Special offer ':'Offer ') + ': ' + foundOffer.offerDescription : ''}
          </div>
          <div className="text-red-500 text-right flex-none w-full md:w-auto">&nbsp;Savings ${(currentProduct.savedAmount).toFixed(2)}</div>
        </div>
      }
      </>
    );
  }

  render() {
    const currentProduct = this.props.productToRender
    return (
      <li className="border-1 mb-3 p-1 rounded-lg border-blue-400 divide-blue-400">
          <div className="flex justify-between text-base text-gray-900">
              <div className="my-2 pl-3 font-medium">{currentProduct.name}</div>
              <div className="flex mr-1">
                  <p className="my-2 mx-2">${this.props.productToRender.price.toFixed(2)}</p>
                  <button className="ml-2 px-2 border-1 border-blue-500 rounded-lg text-black text-sm m-1 active:outline-0" onClick={this.handleRemoveClick}>-</button>
                  <p className="my-2 mx-2">{currentProduct.quantity}</p>
                  <button className="ml-2 px-2 bg-blue-500 rounded-lg text-white text-sm m-1 active:outline-0" onClick={this.handleAddClick}>+</button>
              </div>
          </div>
          <div className="flex justify-end mr-2 text-base text-gray-900 border-b-2 py-1">
              Item price ${currentProduct.price.toFixed(2)} * {currentProduct.quantity} = ${(currentProduct.price * currentProduct.quantity).toFixed(2)}
          </div>
          {this.renderSavingsAmount()}
          <div className="flex justify-end mr-2 text-base text-gray-900 py-1">
              Item cost ${((currentProduct.price * currentProduct.quantity)-currentProduct.savedAmount).toFixed(2)}
          </div>
      </li>
    );
  }
}

export default CartedProductItem