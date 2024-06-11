import { GetRandomProductList } from "@/actions/ProductAction"
import ProductCard from "../global/ProductCard"


export default async function OurProduct() {

    const products = await GetRandomProductList()

    return (
        <div className="pb-10 w-full flex flex-col justify-start items-start px-10 lg:px-24 mt-16">
            <div className="">
                <div style={{ borderLeft: '18px solid #DB4444' }} className="h-[40px] flex justify-center items-center">
                    <label className="text-[12px] font-bold ml-3 text-[#DB4444]">Our Products</label>
                </div>
            </div>

            <div className="mt-5">
                <label className="text-2xl font-bold">Explore Our Products</label>
            </div>

            <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-x-3">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>

            <div style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }} className="mt-16 pb-10 w-full flex justify-center">
                <button className="bg-[#DB4444] rounded-md px-5 justify-center items-center text-white text-sm p-2 mx-auto">View All Products</button>
            </div>
        </div>
    )
}