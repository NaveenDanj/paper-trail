'use client'

import useCurrentCart from "@/hooks/cart";
import CartTotalComponent from "./CartTotalComponent";
import { CartItem } from "@/types/types";
import { useEffect, useState } from "react";
import CartPageItem from "./CartItem";

export default function CartWrapper() {

    const { cartData, setCartData, calculateTotal } = useCurrentCart();
    const [cartMainData, setCartMainData] = useState<CartItem[]>(cartData);
    const [changed, setChanged] = useState<number>(0);

    useEffect(() => {
        setChanged(Math.random() * 100000)
    }, [])


    useEffect(() => {
        setCartMainData(cartData);
    }, [cartData]);

    useEffect(() => {
        calculateTotal();
    }, [cartMainData]);

    const clearCart = () => {
        setCartData([])
        localStorage.setItem('cart', JSON.stringify([]))
        setChanged(-Math.random() * 100000)
    }

    return (
        <>

            <div className="mt-8 w-full ">

                <div className="w-full grid grid-cols-4 lg:grid lg:grid-cols-6 p-3 shadow-lg">
                    <div className="col-span-2 w-full font-semibold">
                        <label>Product</label>
                    </div>

                    <div className="w-full hidden lg:flex font-semibold">
                        <label>Price</label>
                    </div>
                    <div className="w-full font-semibold">
                        <label>Quantity</label>
                    </div>
                    <div className="w-full font-semibold text-right">
                        <label>Subtotal</label>
                    </div>
                </div>

                <div className="flex w-full flex-col gap-5">
                    {cartMainData.map((item: CartItem, index: number) => (
                        <CartPageItem setChanged={setChanged} cartMainData={cartMainData} setCartMainData={setCartMainData} cartItem={item} key={index} />
                    ))}
                </div>

            </div>

            <div className="flex w-full justify-between mt-10">
                <button style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="my-auto rounded-md px-5 justify-center items-center text-black text-sm p-2 font-semibold">Return To Shop</button>
                <button onClick={clearCart} style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="my-auto rounded-md px-5 justify-center items-center text-black text-sm p-2 font-semibold">Clear Cart</button>
            </div>

            <div className="flex flex-col lg:flex-row w-full mt-10 gap-5">

                <div className="flex flex-col w-full justify-start">

                    <div className="flex gap-2 ">
                        <div style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="p-1 px-2 flex w-full max-w-[280px] my-auto">
                            <input className="w-full" style={{ outline: 'none' }} type="text" placeholder="Coupon Code" />
                        </div>
                        <button className="bg-[#DB4444] rounded-md px-2 justify-center items-center text-white text-xs p-1 ">Apply Coupon</button>
                    </div>


                </div>

                <div className="w-full flex justify-start md:justify-center lg:justify-end lg:mt-0 mt-5">
                    <CartTotalComponent changed={changed} />
                </div>

            </div>

        </>
    )
}