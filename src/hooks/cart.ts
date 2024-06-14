"use client"
import { useEffect, useState } from 'react';
import { CartItem, User } from '@/types/types';

function useCurrentCart() {
  const [cartData, setCartData] = useState<CartItem[]>([]);
  const [total , setTotal] = useState<number>(0)

  const calculateTotal = () => {
    for(let i = 0; i < cartData.length; i++){
        setTotal(total + cartData[i].total)
    }
  }
  
  useEffect(() => {
    const cartStr = localStorage.getItem('cart');

    if (cartStr) {
        const cartData = JSON.parse(cartStr);
        setCartData(cartData)
        calculateTotal()
    }
    
  }, []);

  return { cartData, setCartData , calculateTotal , total };
}

export default useCurrentCart;
