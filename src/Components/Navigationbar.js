import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import store from "../store";

const CartIcon = styled.img`
    height:20px;
    margin-left:5px;
`;

const StyledNavBar = styled(Navbar)`
.navbar {
  }

.navbar-brand
{
    padding-left:1%;
}

.navbar-nav
{
    padding-right:1%;
}

.nav-link span
{
    font-weight:600;
}
`;

export class NavigationBar extends React.Component {
    state = {cartCount:0}
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    unsubscribe = () => {};
    componentDidMount()
    {
        this.unsubscribe = store.subscribe(this.handleChange)
    }
    componentWillUnmount()
    {
        this.unsubscribe();
    }

    handleChange()
    {
        const cartedProducts = store.getState();
        const v=(cartedProducts.reduce((a, b) => a + b.quantity,0));
        this.setState({cartCount:v})
    }

    render() {        
        return (
        <StyledNavBar bg="primary" variant="dark">
                <Navbar.Brand as={Link} to="/" className="me-auto">SimplCart</Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/cart">
                        <span>{this.state.cartCount}</span>
                        <CartIcon src="./cart_icon.png"/>
                    </Nav.Link>
                </Nav>
        </StyledNavBar>
    )}
}