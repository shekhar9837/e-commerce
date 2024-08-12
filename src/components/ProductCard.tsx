// src/components/ProductCard.tsx
"use client"
import React, { useState } from 'react';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  handleAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, handleAddToCart}) => {
 
  
  return (
    <div className="p-2  text-white ">
   
      <div key={product.id} className="relative  cursor-pointer md:p-0 p-1">
      
        <div className="text-white text-[11px] absolute flex flex-col justify-between inset-0 md:p-4 p-2 md:opacity-0  hover:opacity-100 transition-opacity">
          <div>
          <h1 className="md:flex hidden">{product.vendor}</h1>
          <h1 className="mt-4 text-sm ">{product.title}</h1>
          <p className="mt-2 text-[11px]">${product.price / 100}.00</p>
          </div>
          <button onClick={()=> handleAddToCart(product)} className='px-4  py-2 border-[1px] border-black rounded-md text-black  bg-gray-300'>Add to cart</button>
        </div>
        <img
          className="object-cover "
          loading="lazy"
          src={product.images}
          alt={product.title}
        />
      </div>
 
  </div>
  );
};

export default ProductCard;
