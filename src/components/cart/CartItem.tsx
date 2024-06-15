import useCurrentCart from "@/hooks/cart";
import { CartItem } from "@/types/types";
import Image from "next/image";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

type IProp = {
    cartItem: CartItem
    cartMainData: CartItem[],
    setCartMainData: Dispatch<SetStateAction<CartItem[]>>
    setChanged: Dispatch<SetStateAction<number>>
}

export default function CartPageItem({ setCartMainData, cartItem, cartMainData, setChanged }: IProp) {

    const handleQtyChange = (qty: number) => {
        const updatedCartData = cartMainData.map(item =>
            item.productData.uid === cartItem.productData.uid
                ? { ...item, quantity: qty, total: parseFloat((qty * item.productData.price).toFixed(2)) }
                : item
        );
        setCartMainData(updatedCartData);
        localStorage.setItem('cart', JSON.stringify(updatedCartData));
        setChanged(Math.random() * 100000)
    }


    return (
        <div className=" p-3 w-full flex-col gap-5 grid grid-cols-4 lg:grid lg:grid-cols-6 mt-7 shadow-lg">

            <div className="flex col-span-2 my-auto gap-2">
                <Image alt="" width={50} height={50} src={'http:' + cartItem.productData.images[0]} />

                <div className="my-auto flex flex-col">
                    <label className="text-sm font-semibold">{cartItem.productData.name.length > 30 ? cartItem.productData.name.substring(0, 30) + '...' : cartItem.productData.name}</label>
                    <label className="text-sm font-bold lg:hidden">LKR {cartItem.productData.price}</label>
                </div>
            </div>

            <div className=" text-left my-auto hidden lg:flex">
                <label className="text-sm font-semibold">LKR {cartItem.productData.price}</label>
            </div>

            <div className="justify-start w-full my-auto">
                <input min={1} type="number" onChange={(e) => handleQtyChange(+e.target.value)} value={cartItem.quantity} className="max-w-[80px] rounded-md pl-2" style={{ border: '1px solid rgba(0,0,0,0.2)' }} />
            </div>

            <div className=" text-right my-auto">
                <label className="text-sm font-semibold">LKR {cartItem.total}</label>
            </div>

        </div>
    )
}  