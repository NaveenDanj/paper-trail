import useCurrentCart from "@/hooks/cart";
import useCurrentCurrency from "@/hooks/currentCurreny";
import { CartItem } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";

type IProp = {
    changed: number;
}


export default function CartTotalComponent({ changed }: IProp) {

    const { currentCurrency, rate } = useCurrentCurrency();


    const { total, cartData } = useCurrentCart();
    const [discount, setDiscount] = useState(0);
    const [rawTotal, setRawTotal] = useState(0);
    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        console.log('changed!!!!')
        // Calculate total whenever cartData changes
        const cartDataStr = localStorage.getItem('cart')
        let cartDataObj = null

        if (cartDataStr) {
            cartDataObj = JSON.parse(cartDataStr) as CartItem[]
            setRawTotal(0);
            setSubTotal(0);
            let t = 0;
            for (let i = 0; i < cartDataObj.length; i++) {
                t += cartDataObj[i].total
            }
            // t = t * rate
            setRawTotal(t);
            setSubTotal(t - discount)
            console.log('total is => ', t)
        }

        if (changed < 0) {
            setRawTotal(0);
            setSubTotal(0);
        }

    }, [cartData, changed])

    return (
        <div style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="flex flex-col p-3 w-full max-w-[500px]">

            <h1 className=" font-semibold">Cart Total</h1>

            <div className="w-full flex flex-col gap-3 mt-5">

                <div style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }} className="flex justify-between w-full pb-3">
                    <label className=" font-medium text-sm">Total:</label>
                    <label className=" font-medium text-sm">{currentCurrency} {(rawTotal * rate).toFixed(2)}</label>
                </div>

                <div style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }} className="flex justify-between w-full pb-3">
                    <label className=" font-medium text-sm">Discount:</label>
                    <label className=" font-medium text-sm">{currentCurrency} {(discount * rate).toFixed(2)}</label>
                </div>

                <div className="flex justify-between w-full pb-3">
                    <label className=" font-medium text-sm">Subtotal:</label>
                    <label className=" font-medium text-sm">{currentCurrency} {(subTotal * rate).toFixed(2)}</label>
                </div>

            </div>

            <div className="mt-5 flex justify-center">
                <Link href={'/checkout'}>
                    <button className="bg-[#DB4444] rounded-md px-2 justify-center items-center text-white text-sm p-2 ">Proceed to checkout</button>
                </Link>
            </div>


        </div>
    )
}