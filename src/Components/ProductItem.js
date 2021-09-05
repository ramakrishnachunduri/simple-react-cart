import React from "react";
import { AddToCart } from "../Reducers/CartedProduct";
import store from "../store";

class ProductItem extends React.Component {
    constructor(productToRender) {
      super(productToRender);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {        
        store.dispatch(AddToCart(this.props.productToRender));
      }

    renderOffers()
    {
      if(this.props.productToRender.offers.length !== 0)
      {
        return (
          <div className="flex justify-between text-sm text-gray-900 pb-2">
            <ul className="list-disc list-outside mr-1 pl-7 pr-0">
              {this.props.productToRender.offers.map(offer => (
                <li key={offer.offerId}> {offer.isOfferSpecial ? 'Special Offer : ' : '' } {offer.offerDescription}</li>
              ))}
            </ul>
          </div>);
      }
      return <></>;
    }

    render() {
      return (
        <li className="border-1 mb-3 p-1 rounded-lg border-blue-400 divide-blue-400">
            <div className="flex justify-between text-base text-gray-900">
                <div className="my-2 pl-3 font-medium">{this.props.productToRender.name}</div>
                <div className="flex mr-1">
                    <p className="my-2">${this.props.productToRender.price.toFixed(2)}</p>
                    <button className="ml-2 px-2 bg-blue-500 rounded-lg text-white text-sm m-1 active:outline-0" onClick={this.handleClick}>Add</button>
                </div>
            </div>{this.renderOffers()}
        </li>
      );
    }
  }

export default ProductItem