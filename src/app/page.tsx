// src/app/page.tsx
"use client"

import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { data } from '@/api/data';
import { Header } from '@/components/Header';
import { useCart } from '@/context/CartContext';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function HomePage() {
  const { dispatch } = useCart();

  const handleAddToCart = (product: Product) => {
      dispatch({ type: 'ADD_ITEM', payload: product });
  };


  
    
  return (
    <div className="container mx-auto px-4 py-8 ">
      <Header/>
      <div className='flex place-items-center  flex-col'>

      <h1 className="text-3xl font-bold text-center mb-8">Welcome to Our Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[80%]  ">
       
        {data.map((product) => (
          <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} /> 
        ))}
      </div>
        </div>
    </div>
  );
}
