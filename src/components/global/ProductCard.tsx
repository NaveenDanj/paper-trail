'use client'

import Image from "next/image";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { CartItem, Product } from "@/types/types";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from "react";
import useCurrentCurrency from "@/hooks/currentCurreny";


type IProp = {
    product: Product
}


export default function ProductCard({ product }: IProp) {
    const { toast } = useToast()
    const [isUserWishlisted, setIsUserWishlisted] = useState<boolean>(false)
    const { currentCurrency, rate } = useCurrentCurrency()
    const router = useRouter()


    useEffect(() => {

        if (checkInWishList()) {
            setIsUserWishlisted(true)
        } else {
            setIsUserWishlisted(false)
        }

    }, [])


    if (!product) {
        return (<label>Loading...</label>)
    }

    const handleNavigate = () => {
        router.push('/product/' + product.uid)
    }


    const handleAddtoCart = () => {

        const cartDataStr = localStorage.getItem('cart');

        const toastData = {
            title: "New Item Added to the cart",
            description: `Added to cart: ${product.name.length > 30 ? product.name.substring(0, 30) + '...' : product.name} - Quantity: 1 - Price: LKR ${product.price.toFixed(2)}`,
        }

        if (!cartDataStr) {
            const cartData: CartItem[] = []

            cartData.push({
                productData: product,
                quantity: 1,
                total: product.price
            })

            localStorage.setItem('cart', JSON.stringify(cartData))

            toast(toastData)

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

                toast(toastData)

            }

            localStorage.setItem('cart', JSON.stringify(cartData))

            toast(toastData)

            return;
        }

    }

    const addToWishlist = () => {

        const wishlistStr = localStorage.getItem('wishlist');

        if (wishlistStr != null) {

            const wishlist = JSON.parse(wishlistStr) as Product[]
            let found = false;

            for (let i = 0; i < wishlist.length; i++) {

                if (wishlist[i].uid === product.uid) {
                    found = true;
                    break;
                }

            }

            if (!found) {
                wishlist.push(product)
            }

            localStorage.setItem('wishlist', JSON.stringify(wishlist))
            setIsUserWishlisted(true)
            return
        }

        const wishlist: Product[] = []
        wishlist.push(product)
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
        setIsUserWishlisted(true)
    }

    const removeFromWishlist = () => {
        const wishlistStr = localStorage.getItem('wishlist');

        if (wishlistStr != null) {
            const wishlist = JSON.parse(wishlistStr) as Product[]

            for (let i = 0; i < wishlist.length; i++) {
                if (wishlist[i].uid === product.uid) {
                    wishlist.splice(i, 1)
                    break;
                }
            }

            localStorage.setItem('wishlist', JSON.stringify(wishlist))
            setIsUserWishlisted(false)
        }

    }

    const checkInWishList = () => {
        const wishlistStr = localStorage.getItem('wishlist');

        if (wishlistStr) {

            const wishlist = JSON.parse(wishlistStr) as Product[]

            for (let i = 0; i < wishlist.length; i++) {

                if (wishlist[i].uid === product.uid) {
                    return true
                }

            }

        }

        return false

    }

    const renderPrice = async () => {
        // if( currentCurrency === 'LKR'){
        return product.price
        // }
        // }else{
        //     return (product.price * rate).toFixed(2);
        // }
    }

    return (
        <div className="cursor-pointer group flex flex-col flex-grow max-w-[320px] px-3 pt-3">

            <div className=" bg-[#F5F5F5] gap-3 w-full flex flex-col justify-center items-center py-3 rounded-lg">

                <div className="w-full flex justify-between pl-2 pr-3">

                    <div className="p-1 px-3 rounded-lg bg-red-500 my-auto">
                        <label className="text-sm text-white">-40%</label>
                    </div>

                    <div className="relative flex flex-col ">

                        <button className=" hover:bg-[#FFFFFF]  p-1 rounded-3xl flex justify-center items-center">
                            {/* {<FavoriteBorderIcon className="text-red-500" /> : } */}
                            {!isUserWishlisted ? <FavoriteBorderIcon onClick={addToWishlist} /> : <FavoriteIcon onClick={removeFromWishlist} className="text-red-500" />}
                        </button>

                    </div>

                </div>

                <div>
                    <Image className="bg-cover items-center" height={200} width={150} alt="" src={'https:' + product.images[0] + ''} />
                </div>

            </div>

            <div onClick={handleNavigate} className="mt-3 flex flex-col gap-3">
                <label className="text-md font-semibold">{product.name}</label>
                <label className="text-sm font-semibold text-[#EF4444]">LKR {renderPrice()} <span className="ml-2 line-through text-slate-800">$160</span> </label>
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