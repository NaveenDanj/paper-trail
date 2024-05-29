import ProductCard from "@/components/global/ProductCard";
import Footer from "@/components/home/Footer";

export default function Wishlist() {
    return (
        <div className="w-full flex flex-col">

            <div className="flex flex-col  px-10 lg:px-24 mt-10 pb-10">

                <div className="flex justify-between w-full">
                    <label className="my-auto">Wishlist (4)</label>
                    <button style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="my-auto rounded-md px-5 justify-center items-center text-black text-sm p-2 ">Move All To Bag</button>
                </div>

                <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-x-3">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
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
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>


            </div>

            <Footer />

        </div>
    )
}