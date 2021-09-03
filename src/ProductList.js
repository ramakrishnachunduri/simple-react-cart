import React from 'react';
import { ListGroup } from 'react-bootstrap';
import cartableProducts from './cartableProducts';
import ProdItem from './Components/ProdItem';

export const ProductList = () => {
    return (
        <ListGroup >
            {cartableProducts.map(product => (
                    <ProdItem key={product.id} productToRender={product} />
           ))}
        </ListGroup>
    )
}