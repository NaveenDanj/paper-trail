import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image";

export default function BannerSection() {
    return (
        <div className="pb-10 w-full  flex flex-col justify-start items-start px-10 lg:px-24 mt-16">

            <div className="bg-[black] w-full flex flex-col sm:flex-row  gap-5 p-5 pl-8">

                <div className="w-full flex flex-col">
                    <label className="text-sm mt-10 text-[#00CF53]">Categories</label>
                    <h1 className="text-4xl mt-8 text-white">Enhance Your <br /> Music Experiences</h1>

                    <div className="flex gap-3 mt-5">

                        <div style={{ borderRadius: 31 }} className="bg-white w-[62px] h-[62px] flex rounded-full justify-center items-center p-1">
                            <div style={{ borderRadius: 200 }} className="flex flex-col rounded-full">
                                <center><label className="font-semibold text-md">05</label></center>
                                <center><label className="font-medium text-xs">Days</label></center>
                            </div>
                        </div>

                        <div style={{ borderRadius: 31 }} className="bg-white w-[62px] h-[62px] flex rounded-full justify-center items-center p-1">
                            <div style={{ borderRadius: 200 }} className="flex flex-col rounded-full">
                                <center><label className="font-semibold text-md">23</label></center>
                                <center><label className="font-medium text-xs">Hours</label></center>
                            </div>
                        </div>

                        <div style={{ borderRadius: 31 }} className="bg-white w-[62px] h-[62px] flex rounded-full justify-center items-center p-1">
                            <div style={{ borderRadius: 200 }} className="flex flex-col rounded-full">
                                <center><label className="font-semibold text-md">59</label></center>
                                <center><label className="font-medium text-xs">Minutes</label></center>
                            </div>
                        </div>

                        <div style={{ borderRadius: 31 }} className="bg-white w-[62px] h-[62px] flex rounded-full justify-center items-center p-1">
                            <div style={{ borderRadius: 200 }} className="flex flex-col rounded-full">
                                <center><label className="font-semibold text-md">59</label></center>
                                <center><label className="font-medium text-xs">Seconds</label></center>
                            </div>
                        </div>

                    </div>

                    <div className="mt-10">
                        <button className="bg-[#00CF53] my-auto rounded-md px-10 mx-auto justify-center items-center text-white text-sm p-2">Buy Now!</button>
                    </div>

                </div>

                <div className="w-full flex justify-center items-center">
                    <AspectRatio className="  flex justify-center items-center md:block" ratio={16 / 9}>
                        <Image className=" relative md:top-[60px] w-[300px] h-[210px] " src={'/banner.png'} alt="" width={600} height={420} />
                    </AspectRatio>
                </div>

            </div>

        </div>
    )
}