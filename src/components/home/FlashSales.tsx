
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "../global/ProductCard"


export default function FlashSales() {
    return (
        <div className="pb-10 w-full flex flex-col justify-start items-start px-10 lg:px-24 mt-16">

            <div className="">
                <div style={{ borderLeft: '18px solid #DB4444' }} className="h-[40px] flex justify-center items-center">
                    <label className="text-[12px] font-bold ml-3 text-[#DB4444]">Today’s</label>
                </div>
            </div>

            <div className="mt-5">
                <label className="text-2xl font-bold">Flash Sales</label>
            </div>

            <div className="mt-8 w-full px-10">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full "
                >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className=" sm:basis-1/2 lg:basis-1/3">
                                <ProductCard />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>


            <div style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }} className="mt-16 pb-10 w-full flex justify-center">
                <button className="bg-[#DB4444] rounded-md px-5 justify-center items-center text-white text-sm p-2 mx-auto">View All Products</button>
            </div>

        </div>
    )
}