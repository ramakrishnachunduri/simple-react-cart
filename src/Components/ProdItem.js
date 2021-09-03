import React from "react";
import { Button, Col, ListGroupItem, Row } from "react-bootstrap";
import styled from 'styled-components';
import { AddToCart } from "../Reducers/CartedProduct";
import store from "../store";

export const StyledListGroupItem = styled(ListGroupItem)`
  .nameClass { font-weight:bold }
  .priceClass { margin : 6px 10px }
  .btn:focus { outline: none; box-shadow: none; }
  `;

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
        <StyledListGroupItem key={this.props.productToRender.id}>
        <Row className="align-items-end">
            <Col sm={8} className="nameClass">{this.props.productToRender.name}</Col>
            <Col sm={4}>
                <Button variant="primary" className="float-end" onClick={this.handleClick}>Add</Button>
                <span className="priceClass float-end">${this.props.productToRender.price}</span>
            </Col>
        </Row>
        </StyledListGroupItem>
      );
    }
  }

export default ProdItem