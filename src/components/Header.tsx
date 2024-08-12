import { Product } from '@/types/product';
import React from 'react'
import { CartItem } from '@/app/page'; // Adjust the import based on where you define CartItem
import Link from 'next/link';


interface HeaderProps {
  cartData: CartItem[];
}

export const Header:React.FC<HeaderProps> = ({cartData}) => {
  const totalItems = cartData.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="flex justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-xl">My Shop</h1>
        <div>
          <Link href="/cart" >
            <span>Cart: {totalItems} item(s)</span>
            </Link>
        </div>
    </header>
);
}
