import React from 'react';
import ProductItem from '../Components/ProductItem';
import CartableProducts from '../CartableProducts';

export const ProductListUI = () => {
    return (
        <ul className="px-2 my-2 divide-y divide-gray-200">
        {CartableProducts.map(product => (
                    <ProductItem key={product.id} productToRender={product} />
           ))}
        </ul>
    )
}