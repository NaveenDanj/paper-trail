import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "../global/ProductCard"


export default function BestSeller() {
    return (
        <div className="w-full flex flex-col justify-start items-start px-10 lg:px-24 mt-16">

            <div className="">
                <div style={{ borderLeft: '18px solid #DB4444' }} className="h-[40px] flex justify-center items-center">
                    <label className="text-[12px] font-bold ml-3 text-[#DB4444]">This Month</label>
                </div>
            </div>

            <div className="w-full mt-5 flex justify-between">
                <label className="text-2xl font-bold my-auto">Best Selling Products</label>
                <button className="bg-[#DB4444] my-auto rounded-md px-10 justify-center items-center text-white text-sm p-2">View All</button>
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

        </div>
    )
}