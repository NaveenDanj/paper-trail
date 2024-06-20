import useCurrentCurrency from "@/hooks/currentCurreny";
import { CartItem } from "@/types/types";
import Image from "next/image";
import currency from 'currency.js'

type IProp = {
    item: CartItem
}


export default function CheckoutItem({ item }: IProp) {

    const { currentCurrency, rate } = useCurrentCurrency();


    return (
        <div className="flex w-full justify-between">

            <div className="flex gap-3 my-auto">
                <Image alt="" width={40} height={40} src={'https://' + item.productData.images[0]} />

                <div className="my-auto ">
                    <label className="text-sm font-semibold">{item.productData.name.length > 25 ? item.productData.name.substring(0, 25) + '...' : item.productData.name} </label>
                </div>

            </div>

            <label className="text-sm font-semibold my-auto">{currentCurrency} {currency(item.total).multiply(rate).toString()}</label>

        </div>
    )
}