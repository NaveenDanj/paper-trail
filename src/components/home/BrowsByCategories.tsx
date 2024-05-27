
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "../global/ProductCard"
import CategoryCard from "../global/CategoryCard"


export default function BrowsByCategories() {
    return (
        <div className="pb-10 w-full flex flex-col justify-start items-start px-10 lg:px-24 mt-16">
            <div className="">
                <div style={{ borderLeft: '18px solid #DB4444' }} className="h-[40px] flex justify-center items-center">
                    <label className="text-[12px] font-bold ml-3 text-[#DB4444]">Categories</label>
                </div>
            </div>

            <div className="mt-5">
                <label className="text-2xl font-bold">Browse By Category</label>
            </div>

            <div className="mt-8 w-full px-10">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full "
                >
                    <CarouselContent>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 lg:basis-1/6">
                                <CategoryCard />
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