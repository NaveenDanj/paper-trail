"use client";
import { useEffect, useState } from 'react';
import { CartItem } from '@/types/types';

function useCurrentCart() {
    const [cartData, setCartData] = useState<CartItem[]>([]);
    const [total, setTotal] = useState<number>(0);

    const calculateTotal = () => {
        const totalAmount = cartData.reduce((sum, item) => sum + item.total, 0);
        setTotal(totalAmount);
    }

    const getLocalStorageData = () => {
        const cartStr = localStorage.getItem('cart');
        if (cartStr) {
            const cartData = JSON.parse(cartStr);
            setCartData(cartData);
        }
    }

    useEffect(() => {
        getLocalStorageData();
    }, []);

    useEffect(() => {
        calculateTotal();
    }, [cartData]);

    return { cartData, setCartData, total, calculateTotal };
}

export default useCurrentCart;