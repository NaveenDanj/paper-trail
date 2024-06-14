'use client'

import Image from "next/image";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { CartItem, Product } from "@/types/types";
import { useRouter } from "next/navigation";


type IProp = {
    product: Product
}


export default function ProductCard({ product }: IProp) {

    const router = useRouter()

    if (!product) {
        return (<label>Loading...</label>)
    }

    const handleNavigate = () => {
        router.push('/product/' + product.uid)
    }


    const handleAddtoCart = () => {

        const cartDataStr = localStorage.getItem('cart');

        if (!cartDataStr) {
            const cartData: CartItem[] = []

            cartData.push({
                productData: product,
                quantity: 1,
                total: product.price
            })

            localStorage.setItem('cart', JSON.stringify(cartData))

            return;

        } else {

            const cartData = JSON.parse(cartDataStr) as CartItem[]
            let checkFlag = false;

            for (let i = 0; i < cartData.length; i++) {

                if (cartData[i].productData.uid === product.uid) {
                    cartData[i].quantity += 1;
                    cartData[i].total = cartData[i].quantity * cartData[i].productData.price;
                    checkFlag = true;
                    break;
                }

            }

            if (!checkFlag) {
                cartData.push({
                    productData: product,
                    quantity: 1,
                    total: product.price
                })
            }

            localStorage.setItem('cart', JSON.stringify(cartData))

            return;
        }

    }

    return (
        <div onClick={handleNavigate} className="cursor-pointer group flex flex-col flex-grow max-w-[320px] px-3 pt-3">

            <div className=" bg-[#F5F5F5] gap-3 w-full flex flex-col justify-center items-center py-3 rounded-lg">

                <div className="w-full flex justify-between pl-2 pr-3">

                    <div className="p-1 px-3 rounded-lg bg-red-500 my-auto">
                        <label className="text-sm text-white">-40%</label>
                    </div>

                    <div className="relative flex flex-col ">

                        <button className=" hover:bg-[#FFFFFF] p-1 rounded-3xl flex justify-center items-center">
                            <FavoriteBorderIcon />
                        </button>

                    </div>

                </div>

                <div>
                    <Image className="bg-cover items-center" height={200} width={150} alt="" src={'https:' + product.images[0] + ''} />
                </div>

            </div>

            <div className="mt-3 flex flex-col gap-3">
                <label className="text-md font-semibold">{product.name}</label>
                <label className="text-sm font-semibold text-[#EF4444]">LKR {product.price} <span className="ml-2 line-through text-slate-800">$160</span> </label>
            </div>


            <div className="flex flex-col flex-grow"></div>

            <div className="mt-3 flex">
                <StarIcon className="text-md text-[#FFAD33]" />
                <StarIcon className="text-md text-[#FFAD33]" />
                <StarIcon className="text-md text-[#FFAD33]" />
                <StarIcon className="text-md text-[#FFAD33]" />
                <StarIcon className="text-md text-[#FFAD33]" />
                <label className="my-auto text-md ml-2 font-bold text-[#808080]">(88)</label>
            </div>

            <div className="w-full mt-6">
                <button onClick={handleAddtoCart} className="bg-black rounded-md w-full justify-center items-center text-white text-sm p-2">Add To Cart</button>
            </div>

        </div>

    )
}