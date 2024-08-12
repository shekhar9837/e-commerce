'use client'
import { Product } from '@/types/product';
import React from 'react'
import Link from 'next/link';
import { useCart } from '@/context/CartContext';




export const Header:React.FC = () => {
  const { state } = useCart();
  return (
    <header className="flex justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-xl">My Shop</h1>
        <div>
          <Link href="/cart" >
          Cart ({state.items.length})
            </Link>
        </div>
    </header>
);
}
