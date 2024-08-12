// src/app/page.tsx
"use client"

import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { data } from '@/api/data';
import { Header } from '@/components/Header';
import { Product } from '@/types/product';


export type CartItem = {
  product: Product;
  quantity: number;
};

export default function HomePage() {
  const [cartData, setCartData]  = useState<CartItem[]>([])


  const addToCart = (product: Product) => {
    // Check if the product is already in the cart
    const existingItem = cartData.find(item => item.product.id === product.id);
    if (existingItem) {
        // If it exists, update the quantity
        setCartData(cartData.map(item =>
            item.product.id === product.id
                ? { ...existingItem, quantity: existingItem.quantity + 1 }
                : item
        ));
    } else {
        // If it doesn't exist, add it to the cart with quantity 1
        setCartData([...cartData, { product, quantity: 1 }]);
    }
};
    
  return (
    <div className="container mx-auto px-4 py-8 ">
      <Header cartData={cartData}/>
      <div className='flex place-items-center  flex-col'>

      <h1 className="text-3xl font-bold text-center mb-8">Welcome to Our Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[80%]  ">
       
        {data.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} /> 
        ))}
      </div>
        </div>
    </div>
  );
}
