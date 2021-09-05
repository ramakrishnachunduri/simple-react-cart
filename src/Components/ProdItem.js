import React from "react";
import { Button } from "react-bootstrap";
import { AddToCart } from "../Reducers/CartedProduct";
import store from "../store";

class ProdItem extends React.Component {
    constructor(productToRender) {
      super(productToRender);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {        
        store.dispatch(AddToCart(this.props.productToRender));
      }

    render() {
      return (
        <li className="border-1 mb-3 p-1 rounded-lg border-blue-400 divide-blue-400">
            <div className="flex justify-between text-base text-gray-900">
                <div className="my-2 pl-3 font-medium">{this.props.productToRender.name}</div>
                <div className="flex pt-1 mr-1">
                    <p className="my-2">${this.props.productToRender.price.toFixed(2)}</p>
                    <Button variant="primary" size="sm" className="ml-2 px-2 py-0" onClick={this.handleClick}>Add</Button>
                </div>
            </div>
            <div className="flex justify-between text-base text-gray-900 py-2">
                <ul className="list-disc">
                    {this.props.productToRender.offers.map(offer => (
                      <li key={offer.offerId}> {offer.isOfferSpecial ? 'Special Offer : ' : '' } {offer.offerDescription}</li>
                     ))}
                </ul>
            </div>
        </li>
      );
    }
  }

export default ProdItem