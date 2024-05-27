import Image from "next/image";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';


export default function ProductCard() {
    return (
        <div className="group flex flex-col max-w-[320px] px-3 pt-3">

            <div className=" bg-[#F5F5F5] gap-3 w-full flex flex-col justify-center items-center py-3 rounded-lg">

                <div className="w-full flex justify-between pl-2 pr-3">

                    <div className="p-1 px-3 rounded-lg bg-red-500 my-auto">
                        <label className="text-sm text-white">-40%</label>
                    </div>

                    <div className="relative flex flex-col ">

                        <button className=" hover:bg-[#FFFFFF] p-1 rounded-3xl flex justify-center items-center">
                            <FavoriteBorderIcon />
                        </button>

                    </div>

                </div>

                <div>
                    <Image className="bg-cover items-center" height={200} width={150} alt="" src={'https://www.promateworld.com/storage/mango/paper/bpfg0370-rathna-foolscap-square-a3-250-sheets-pack-150x150.png'} />
                </div>

            </div>

            <div className="mt-3 flex flex-col gap-3">
                <label className="text-md font-semibold">HAVIT HV-G92 Gamepad</label>
                <label className="text-sm font-semibold text-[#EF4444]">$120 <span className="ml-2 line-through text-slate-800">$160</span> </label>
            </div>

            <div className="mt-3 flex">
                <StarIcon className="text-md text-[#FFAD33]" />
                <StarIcon className="text-md text-[#FFAD33]" />
                <StarIcon className="text-md text-[#FFAD33]" />
                <StarIcon className="text-md text-[#FFAD33]" />
                <StarIcon className="text-md text-[#FFAD33]" />
                <label className="my-auto text-md ml-2 font-bold text-[#808080]">(88)</label>
            </div>

            <div className="w-full mt-6">
                <button className="bg-black rounded-md w-full justify-center items-center text-white text-sm p-2">Add To Cart</button>
            </div>

        </div>

    )
}