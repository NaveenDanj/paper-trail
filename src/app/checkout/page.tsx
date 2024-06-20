'use client'

import CheckoutItem from "@/components/checkout/CheckoutItem";
import Footer from "@/components/home/Footer";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import useCurrentCart from "@/hooks/cart";
import useCurrentCurrency from "@/hooks/currentCurreny";
import { CartItem, Product } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Checkout() {

    const { currentCurrency, rate } = useCurrentCurrency();
    const router = useRouter();

    const { total, cartData } = useCurrentCart();
    const [discount, setDiscount] = useState(0);
    const [rawTotal, setRawTotal] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [items, setItems] = useState<CartItem[]>([])

    useEffect(() => {
        const cartDataStr = localStorage.getItem('cart')
        let cartDataObj = null

        if (cartDataStr) {
            cartDataObj = JSON.parse(cartDataStr) as CartItem[]
            setItems(cartDataObj)
            setRawTotal(0);
            setSubTotal(0);
            let t = 0;
            for (let i = 0; i < cartDataObj.length; i++) {
                t += cartDataObj[i].total
            }
            // t = t * rate
            setRawTotal(t);
            setSubTotal(t - discount)
        } else {
            router.replace('/')
        }

    }, [])



    return (
        <div className="w-full flex flex-col">

            <div className="flex flex-col px-10 lg:px-24 mt-10 pb-10 ">

                <div className="flex flex-col lg:flex-row w-full gap-3">

                    <div className="flex flex-col w-full">

                        <label className="text-3xl font-semibold">Billing Details</label>

                        <div className="flex flex-col gap-5 w-full mt-10">

                            <div className="flex w-full flex-col gap-2">
                                <label className="text-[#7D8184] text-sm">First Name*</label>
                                <div className="w-full flex bg-[#F5F5F5] p-2">
                                    <input className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col gap-2">
                                <label className="text-[#7D8184] text-sm">Company Name</label>
                                <div className="w-full flex bg-[#F5F5F5] p-2">
                                    <input className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col gap-2">
                                <label className="text-[#7D8184] text-sm">Street Address*</label>
                                <div className="w-full flex bg-[#F5F5F5] p-2">
                                    <input className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col gap-2">
                                <label className="text-[#7D8184] text-sm">Apartment, floor, etc. (optional)</label>
                                <div className="w-full flex bg-[#F5F5F5] p-2">
                                    <input className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col gap-2">
                                <label className="text-[#7D8184] text-sm">Town/City*</label>
                                <div className="w-full flex bg-[#F5F5F5] p-2">
                                    <input className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col gap-2">
                                <label className="text-[#7D8184] text-sm">Phone Number*</label>
                                <div className="w-full flex bg-[#F5F5F5] p-2">
                                    <input className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col gap-2">
                                <label className="text-[#7D8184] text-sm">Email Address*</label>
                                <div className="w-full flex bg-[#F5F5F5] p-2">
                                    <input className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className="flex justify-center lg:justify-end items-center w-full mt-10 lg:mt-0">

                        <div className="flex w-full flex-col gap-8 py-3 max-w-[350px]">

                            {items.map((item, index) => (<CheckoutItem item={item} key={index} />))}

                            <div className="w-full flex flex-col gap-3 mt-5">

                                <div style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }} className="flex justify-between w-full pb-3">
                                    <label className=" font-medium text-sm">Subtotal:</label>
                                    <label className=" font-medium text-sm">$1750</label>
                                </div>

                                <div style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }} className="flex justify-between w-full pb-3">
                                    <label className=" font-medium text-sm">Shipping:</label>
                                    <label className=" font-medium text-sm">$1750</label>
                                </div>

                                <div style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }} className="flex justify-between w-full pb-3">
                                    <label className=" font-medium text-sm">Discount:</label>
                                    <label className=" font-medium text-sm">$1750</label>
                                </div>

                                <div className="flex justify-between w-full pb-3">
                                    <label className=" font-medium text-sm">Total:</label>
                                    <label className=" font-medium text-sm">$1750</label>
                                </div>

                            </div>

                            <div className="w-full mt-0">
                                <RadioGroup defaultValue="card">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="card" id="r2" />
                                        <label htmlFor="r2">Card</label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="default" id="r1" />
                                        <label htmlFor="r1">Bank</label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="comfortable" id="r2" />
                                        <label htmlFor="r2">Cash on delivery</label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="w-full flex flex-col gap-4">

                                <div className="flex flex-row gap-2 justify-between w-full">
                                    <div style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="rounded-md p-1 px-2 flex w-full my-auto">
                                        <input className="w-full" style={{ outline: 'none' }} type="text" placeholder="Coupon Code" />
                                    </div>
                                    <button className="bg-[#DB4444] w-[150px] rounded-md px-2 justify-center items-center text-white text-xs p-1 ">Apply Coupon</button>
                                </div>

                                <div className="w-full mt-5">
                                    <button className="bg-[#DB4444] w-[150px] rounded-md px-2 justify-center items-center text-white text-sm p-3 ">Place Order</button>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}