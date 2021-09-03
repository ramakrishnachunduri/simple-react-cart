import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
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
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home" className="me-auto">SimplCart</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#cart"><span>10</span><img src="./cart_icon.png" style={{height:20,marginLeft:5}} /></Nav.Link>
                </Nav>
        </Navbar>
    </Styles >
)