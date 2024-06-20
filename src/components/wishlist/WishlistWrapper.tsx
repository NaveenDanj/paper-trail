'use client'
// import { GetProducts } from "@/actions/ProductAction";
import { Product } from "@/types/types";
import { useEffect, useState } from "react";
import ProductCard from "../global/ProductCard";

export default function WishListWrapper() {

    const [wishlist, setWishlist] = useState<Product[]>([]);
    const [products, setProduct] = useState<Product[]>([])

    useEffect(() => {
        const wishlistStr = localStorage.getItem('wishlist');

        if (wishlistStr !== null) {
            setWishlist(JSON.parse(wishlistStr) as Product[])
        }

        fetchItems();

    }, [])

    const fetchItems = async () => {
        const response = await fetch(`/api/get-products-limit`);
        const data = await response.json() as Product[];
        setProduct(data);
    }

    return (
        <>
            <div className="flex justify-between w-full">
                <label className="my-auto">Wishlist ({wishlist.length})</label>
                <button style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="my-auto rounded-md px-5 justify-center items-center text-black text-sm p-2 ">Move All To Bag</button>
            </div>

            <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-x-3">
                {wishlist.map((product: Product, index: number) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>

            <div className="flex flex-col w-full justify-start items-start mt-24">

                <div className="flex justify-between w-full">
                    <div style={{ borderLeft: '18px solid #DB4444' }} className="h-[40px] flex justify-center items-center">
                        <label className="text-lg font-semibold ml-3">Just for you</label>
                    </div>

                    <button style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="my-auto rounded-md px-5 justify-center items-center text-black text-sm p-2 ">See All</button>

                </div>

            </div>

            <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-x-3">
                {products.map((product: Product, index: number) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </>
    )
}