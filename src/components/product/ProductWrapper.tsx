import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import ProductCard from "@/components/global/ProductCard";
import { ProductInfo } from "@/components/product/ProductInfo";
import ReviewSection from "@/components/product/ReviewSection";
import CustomerReviews from "@/components/product/CustomerReviews";
import { useEffect, useState } from "react";
import { CartItem, Product } from "@/types/types";
import { LoadingInlineComponent } from "../global/LoadingScreen";
import useCurrentCurrency from "@/hooks/currentCurreny";
import currency from "currency.js";
import { useRouter } from "next/navigation";
import FavoriteIcon from '@mui/icons-material/Favorite';


type IProp = {
    id: string;
}

export default function ProductWrapper({ id }: IProp) {

    const [products, setProduct] = useState<Product[]>([]);
    const [currentProduct, setCurrentProduct] = useState<Product>()
    const [currentImage, setCurrentImage] = useState<string>()
    const { currentCurrency, rate } = useCurrentCurrency();
    const [orderStock, setOrderStock] = useState(1)
    const router = useRouter();
    const [isUserWishlisted, setIsUserWishlisted] = useState<boolean>(false)


    const fetchData = async () => {
        const response = await fetch(`/api/product-info/${id}`);
        const cp = await response.json() as Product;

        setCurrentProduct(cp)
        setCurrentImage(cp.images[0])
        console.log(cp)

        if (checkInWishList()) {
            setIsUserWishlisted(true)
        } else {
            setIsUserWishlisted(false)
        }


    }

    const handleSelectCurrentImage = async (index: number) => {
        setCurrentImage(currentProduct?.images[index])
    }

    const checkInWishList = () => {
        const wishlistStr = localStorage.getItem('wishlist');

        if (wishlistStr) {

            const wishlist = JSON.parse(wishlistStr) as Product[]

            for (let i = 0; i < wishlist.length; i++) {

                if (wishlist[i].uid === id) {
                    return true
                }

            }

        }

        return false

    }

    const fetchItems = async () => {
        const response = await fetch(`/api/best-selling`);
        const data = await response.json() as Product[];
        setProduct(data);
    }


    useEffect(() => {
        fetchData();
        fetchItems();
    }, [])


    if (!currentProduct) {
        return (
            <div className="w-full flex h-full justify-center items-center">
                <LoadingInlineComponent />
            </div>
        )
    }

    const handleBuyItem = async () => {
        let newCart = []
        newCart.push({
            productData: currentProduct,
            quantity: orderStock,
            total: currency(currentProduct.price).multiply(orderStock).value
        } as CartItem)
        localStorage.setItem('cart', JSON.stringify(newCart))
        router.replace('/checkout')
        return
    }



    return (
        <>
            <div className="flex flex-col  lg:flex-row  w-full gap-5">

                <div className="flex gap-3 w-full lg:w-[60vw]">

                    <div className="lg:flex hidden flex-col gap-3">

                        {currentProduct.images.map((image: string, index: number) => (
                            <Image style={{ border: image == currentImage ? '1px solid rgba(0,0,0,0.2)' : '' }} className=" cursor-pointer" onClick={() => handleSelectCurrentImage(index)} key={index} alt="" width={100} height={100} src={image} />
                        ))}

                    </div>

                    <div className="w-full flex justify-center">
                        <Image className="bg-cover w-[90%] bg-center object-cover" alt="" width={400} height={500} src={currentImage + ''} />
                    </div>

                </div>

                <div className="flex flex-col px-4 w-full lg:w-[40vw]">

                    <div className="mt-3 flex flex-col gap-3">
                        <div>
                            <label className="text-2xl font-semibold">{currentProduct?.name}</label>
                            <div className="flex my-auto mt-3">
                                <StarIcon className="text-sm text-[#FFAD33]" />
                                <StarIcon className="text-sm text-[#FFAD33]" />
                                <StarIcon className="text-sm text-[#FFAD33]" />
                                <StarIcon className="text-sm text-[#FFAD33]" />
                                <StarIcon className="text-sm text-[#FFAD33]" />
                                <label className="my-auto text-sm ml-2 font-medium text-[#808080]">(150 Reviews) | <span className="text-[#00FF66]">In Stock ({currentProduct.stock})</span> </label>
                            </div>
                            <label className="text-2xl font-semibold">{currentCurrency} {currency(currentProduct.price).multiply(rate).toString()}</label>

                            <div className="mt-4 text-sm font-semibold">
                                <p>{currentProduct.description}</p>
                            </div>

                            <div className="my-5" style={{ borderTop: '1px solid rgba(0,0,0,0.4)' }}></div>

                            <div className="flex flex-col w-full gap-5">

                                {/* <div className="flex w-full">
                                    <label className="font-semibold">Colours:</label>
                                </div>

                                <div className="flex w-full">
                                    <label className="font-semibold my-auto">Size:</label>

                                    <div className="flex my-auto ml-3 gap-3 font-medium">

                                        <div style={{ border: '1px solid rgba(0,0,0,0.2)' }} className=" rounded-lg p-2 flex justify-center items-center">
                                            <label>XS</label>
                                        </div>

                                        <div style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="min-w-[36px] rounded-lg p-2 flex justify-center items-center">
                                            <label>S</label>
                                        </div>

                                        <div style={{ border: '1px solid rgba(0,0,0,0.2)' }} className=" rounded-lg p-2 flex justify-center items-center">
                                            <label>M</label>
                                        </div>

                                        <div style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="min-w-[36px] rounded-lg p-2 flex justify-center items-center">
                                            <label>L</label>
                                        </div>

                                        <div style={{ border: '1px solid rgba(0,0,0,0.2)' }} className=" rounded-lg p-2 flex justify-center items-center">
                                            <label>XL</label>
                                        </div>

                                    </div>

                                </div> */}

                                <div className="flex gap-3 w-full mt-3">

                                    <div style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="flex">
                                        <div onClick={() => { orderStock > 1 && setOrderStock(orderStock - 1) }} style={{ borderRight: '1px solid rgba(0,0,0,0.2)' }} className=" cursor-pointer p-1 px-3">
                                            <label className="">-</label>
                                        </div>

                                        <div className="p-1 px-5 rounded-md">
                                            {orderStock}
                                        </div>

                                        <div onClick={() => { orderStock < currentProduct.stock && setOrderStock(orderStock + 1) }} style={{ borderLeft: '1px solid rgba(0,0,0,0.2)', borderRight: '1px solid rgba(0,0,0,0.2)' }} className=" bg-[#DB4444] text-white cursor-pointer p-1 px-3">
                                            <label className="">+</label>
                                        </div>
                                    </div>

                                    <button onClick={handleBuyItem} className="bg-[#DB4444] w-[150px] rounded-md px-2 justify-center items-center text-white text-sm p-2 ">Buy Now</button>

                                    <div style={{ border: '1px solid rgba(0,0,0,0.2)' }} className=" rounded-lg cursor-pointer p-2 flex justify-center items-center">
                                        {!isUserWishlisted ? <FavoriteBorderIcon className="text-sm" /> : <FavoriteIcon className="text-sm text-red-500" />}
                                    </div>

                                </div>

                                <div style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="rounded-md flex flex-col">

                                    <div className="rounded-md w-full p-3 flex gap-4">
                                        <LocalShippingOutlinedIcon className="text-[35px] my-auto" />

                                        <div className="flex flex-col my-auto gap-1">
                                            <label className=" font-semibold">Free Delivery</label>
                                            <label className="underline">Enter your postal code for Delivery Availability</label>
                                        </div>

                                    </div>

                                    <div style={{ borderTop: '1px solid rgba(0,0,0,0.2)' }} className="w-full p-3 flex gap-4">
                                        <KeyboardReturnIcon className="text-[35px] my-auto" />

                                        <div className="flex flex-col my-auto gap-1">
                                            <label className=" font-semibold">Free Delivery</label>
                                            <label className="">Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span></label>
                                        </div>

                                    </div>

                                </div>


                            </div>


                        </div>
                    </div>



                </div>

            </div>

            <div className="flex lg:w-[55%] flex-col w-full justify-start items-start mt-16 mb-5">
                <ProductInfo />
            </div>

            <ReviewSection />

            <CustomerReviews />

            <div className="flex flex-col w-full justify-start items-start mt-10">

                <div className="flex justify-between w-full">
                    <div style={{ borderLeft: '18px solid #DB4444' }} className="h-[40px] flex justify-center items-center">
                        <label className="text-lg font-semibold ml-3">Related Item</label>
                    </div>

                </div>

            </div>

            <div className=" mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-x-3">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </>
    )
}