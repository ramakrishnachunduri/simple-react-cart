import React from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import store from "./store";
import CartedProductItem from './Components/CartedProductItem';
import styled from 'styled-components';

const StyledFinalPriceItem = styled(ListGroupItem)`
  {margin:5px; border:none; padding:10px; }
  .rowheading { font-weight : 700 }
  .row {margin:10px 0px;}
  `;

export class Cart extends React.Component {
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
    render() {
        const cartedProducts = store.getState();
    return (
        <>
        <ListGroup>
            {cartedProducts.map(product => (
                    <CartedProductItem key={product.id} productToRender={product}></CartedProductItem>
            ))}
        </ListGroup>
        <ListGroup>
            <StyledFinalPriceItem> 
                <Row><Col sm={6} ><span className="rowheading">
                    SubTotal:
                </span></Col><Col sm={6} ><span className="float-end">
                    ${(this.state.cartItemPriceTotal).toFixed(2)}
                </span></Col></Row>

                <Row><Col sm={6} ><span className="rowheading">
                    Savings:
                </span></Col><Col sm={6} ><span className="float-end">
                ${(this.state.cartSavings).toFixed(2)}
                </span></Col></Row>

                <Row><Col sm={6} ><span className="rowheading">
                    Total Amount:
                </span></Col><Col sm={6} ><span className="float-end">
                    ${(this.state.cartTotal).toFixed(2)}
                </span></Col></Row>
            </StyledFinalPriceItem>
        </ListGroup>
        </>
    )}
}