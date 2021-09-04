import React from 'react';
import { ListGroup } from 'react-bootstrap';
import CartableProducts from './CartableProducts';
import ProdItem from './Components/ProdItem';

export const ProductList = () => {
    return (
        <ListGroup >
            {CartableProducts.map(product => (
                    <ProdItem key={product.id} productToRender={product} />
           ))}
        </ListGroup>
    )
}