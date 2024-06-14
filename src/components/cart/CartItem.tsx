import useCurrentCart from "@/hooks/cart";
import { CartItem } from "@/types/types";
import Image from "next/image";
import { useState, useEffect } from "react";

type IProp = {
    cartItem: CartItem
}

export default function CartPageItem({ cartItem }: IProp) {

    const { cartData, setCartData } = useCurrentCart();
    const [_cartItem, set_cartItem] = useState<CartItem>(cartItem);

    const handleQtyChange = (qty: number) => {
        const _cartData = [...cartData]; // create a new array with spread operator

        for (let i = 0; i < _cartData.length; i++) {
            if (_cartData[i].productData.uid === _cartItem.productData.uid) {
                const updatedCartItem = { ..._cartItem, quantity: qty, total: parseFloat((qty * _cartItem.productData.price).toFixed(2)) }; // create a new object with updated values
                set_cartItem(updatedCartItem);
                _cartData[i] = updatedCartItem;
                setCartData(_cartData);
                localStorage.setItem('cart', JSON.stringify(_cartData));
                return;
            }
        }
    }


    return (
        <div className=" p-3 w-full flex-col gap-5 grid grid-cols-4 lg:grid lg:grid-cols-6 mt-7 shadow-lg">

            <div className="flex col-span-2 my-auto gap-2">
                <Image alt="" width={50} height={50} src={'http:' + _cartItem.productData.images[0]} />

                <div className="my-auto flex flex-col">
                    <label className="text-sm font-semibold">{_cartItem.productData.name.length > 30 ? _cartItem.productData.name.substring(0, 30) + '...' : _cartItem.productData.name}</label>
                    <label className="text-sm font-bold lg:hidden">LKR {_cartItem.productData.price}</label>
                </div>
            </div>

            <div className=" text-left my-auto hidden lg:flex">
                <label className="text-sm font-semibold">LKR {_cartItem.productData.price}</label>
            </div>

            <div className="justify-start w-full my-auto">
                <input min={1} type="number" onChange={(e) => handleQtyChange(+e.target.value)} value={_cartItem.quantity} className="max-w-[80px] rounded-md pl-2" style={{ border: '1px solid rgba(0,0,0,0.2)' }} />
            </div>

            <div className=" text-right my-auto">
                <label className="text-sm font-semibold">{_cartItem.total}</label>
            </div>

        </div>
    )
}  