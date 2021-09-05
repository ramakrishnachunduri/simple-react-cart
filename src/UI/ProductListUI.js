import React from 'react';
import CartableProducts from '../CartableProducts';
import ProdItem from '../Components/ProdItem';

export const ProductListUI = () => {
    return (
        <ul className="px-2 my-2 divide-y divide-gray-200">
        {CartableProducts.map(product => (
                    <ProdItem key={product.id} productToRender={product} />
           ))}
        </ul>
    )
}