import React from "react";
import { Button, Col, ListGroupItem, Row } from "react-bootstrap";
import styled from 'styled-components';
import { AddToCart, RemoveFromCart } from "../Reducers/CartedProduct";
import store from "../store";

export const StyledListGroupItem = styled(ListGroupItem)`
  .nameClass { font-weight:bold }
  .quantityClass { margin : 6px 10px }
  .itemPriceCalClass { padding:10px;}
  .btn:focus { outline: none; box-shadow: none; }
  .itemFinalPriceClass,.savedAmountClass {border-top:solid thin #DDD; padding:10px;}
  .savedAmountClass { color:red; }
  {margin:5px 5px 0px 5px; border-color:red;}
  `;

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

  render() {
    const currentProduct = this.props.productToRender
    return (
      <StyledListGroupItem key={currentProduct.id} className="border-1">
        <Row className="align-items-end">
          <Col sm={4} className="nameClass">{currentProduct.name}</Col>
          <Col sm={4} className="priceClass">${currentProduct.price.toFixed(2)}</Col>
          <Col sm={4}>
            <Button variant="outline-primary" className="float-end" onClick={this.handleRemoveClick}>-</Button>
            <span className="quantityClass float-end">{currentProduct.quantity}</span>
            <Button variant="primary" className="float-end" onClick={this.handleAddClick}>+</Button>
          </Col>
        </Row>
        <Row className="itemPriceCalClass"><Col sm={12}>
          <span className="float-end">
            Item price ${currentProduct.price.toFixed(2)} * {currentProduct.quantity} = ${(currentProduct.price * currentProduct.quantity).toFixed(2)}
          </span>
        </Col></Row>
        {currentProduct.savedAmount > 0 &&
          <Row className="savedAmountClass"><Col sm={12}>
            <span className="float-end">
              Savings ${(currentProduct.savedAmount).toFixed(2)}
            </span>
          </Col></Row>
        }
        <Row className="itemFinalPriceClass"><Col sm={12}>
          <span className="float-end">
            Item cost ${((currentProduct.price * currentProduct.quantity)-currentProduct.savedAmount).toFixed(2)}
          </span>
        </Col></Row>
      </StyledListGroupItem>
    );
  }
}

export default CartedProductItem