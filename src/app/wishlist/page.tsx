'use client'
import Footer from "@/components/home/Footer";
import WishListWrapper from "@/components/wishlist/WishlistWrapper";

export default function Wishlist() {

    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-col  px-10 lg:px-24 mt-10 pb-10">
                <WishListWrapper />
            </div>
            <Footer />
        </div>
    )
}