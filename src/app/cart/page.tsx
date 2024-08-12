"use client"
import React from 'react';
import { useCart } from '@/context/CartContext';

const CartPage: React.FC = () => {
    const { state, dispatch } = useCart();

    const handleRemoveItem = (id: number) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id });
    };

    const handleQuantityChange = (id: number, quantity: number) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    };

    const calculateSubtotal = () => {
        return state.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
            {state.items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <div className="flex flex-col w-[70%]">
                        {state.items.map(item => (
                            <div key={item.product.id} className="flex items-start justify-start border-b py-2">
                                <img src={item.product.images} alt={item.product.images} className="w-60 h-60 object-cover " />
                                  <div className='flex flex-col px-6 py-2'>
                                <span>{item.product.vendor}</span>
                                <span>{item.product.title}</span>
                                <span>${item.product.price.toFixed(2)}</span>
                                
                         
                                <input
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    onChange={e => handleQuantityChange(item.product.id, parseInt(e.target.value))}
                                    className="w-16 text-center border"
                                    />
                                      </div>
                                    <div className='px-6 py-2'>   
                                <button
                                    onClick={() => handleRemoveItem(item.product.id)}
                                    className="bg-red-500 text-white py-1 px-2 rounded"
                                    >
                                    Remove
                                </button>
                                    </div>
                            </div>
                        ))}
                    </div>
                    <h2 className="mt-4">Subtotal: ${calculateSubtotal().toFixed(2)}</h2>
                </div>
            )}
        </div>
    );
};

export default CartPage;
