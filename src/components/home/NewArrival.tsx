import ProductCard from "../global/ProductCard"


export default function NewArraival() {
    return (
        <div className="pb-10 w-full flex flex-col justify-start items-start px-10 lg:px-24 mt-16   ">
            <div className="">
                <div style={{ borderLeft: '18px solid #DB4444' }} className="h-[40px] flex justify-center items-center">
                    <label className="text-[12px] font-bold ml-3 text-[#DB4444]">Featured</label>
                </div>
            </div>

            <div className="mt-5">
                <label className="text-2xl font-bold">New Arrival</label>
            </div>

            <div className="mt-8 w-full flex gap-4">

                <div className="flex w-full bg-red-500">

                    <div style={{ backgroundImage: "url('https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/f9e9948e4d4f4c94f5c4133a5b51e128.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp')" }} className="p-2 flex justify-start items-end object-cover w-full h-[400px]">
                        <div className="pl-2 flex flex-col gap-3 ">
                            <label className="text-xl text-black font-bold">PlayStation 5</label>
                            <label className="text-sm text-black font-semibold">Black and White version of the PS5<br /> coming out on sale.</label>
                        </div>
                    </div>

                </div>

                <div className="flex w-full bg-blue-500">
                    asd
                </div>

            </div>
        </div>
    )
}