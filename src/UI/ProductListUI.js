import React from 'react';
import CartableProducts from '../CartableProducts';
import ProductItem from '../Components/ProductItem';

export const ProductListUI = () => {
    return (
        <ul className="px-2 my-2 divide-y divide-gray-200">
        {CartableProducts.map(product => (
                    <ProductItem key={product.id} productToRender={product} />
           ))}
        </ul>
    )
}