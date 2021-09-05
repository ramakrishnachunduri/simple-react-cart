import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import store from "../store";

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
        <Navbar bg="primary" variant="dark">
                <Navbar.Brand as={Link} to="/" className="me-auto ml-3">SimplCart</Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/cart">
                        {this.state.cartCount}<img className="ml-2 h-6 inline" alt="Cart" src="./cart_icon.png"/>
                    </Nav.Link>
                </Nav>
        </Navbar>
    )}
}