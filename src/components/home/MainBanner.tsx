import Image from "next/image";

export default function MainBanner() {
    return (
        <div className="w-full flex px-10 lg:px-24">

            <div style={{ borderRight: '1px solid rgba(0,0,0,0.2)' }} className="pb-5 hidden lg:flex flex-col min-w-[250px]">

                <div className="flex flex-col mt-5 gap-4">
                    <label className="text-sm font-medium cursor-pointer">Notebooks</label>
                    <label className="text-sm font-medium cursor-pointer">Writing Instruments</label>
                    <label className="text-sm font-medium cursor-pointer">Paper Products</label>
                    <label className="text-sm font-medium cursor-pointer">Organizational Supplies</label>
                    <label className="text-sm font-medium cursor-pointer">Office Essentials</label>
                    <label className="text-sm font-medium cursor-pointer">Art Supplies</label>
                    <label className="text-sm font-medium cursor-pointer">Desk Accessories</label>
                </div>

            </div>

            <div style={{ backgroundImage: 'url("https://images.playground.com/bed235c13fcf40fdacc806d7c183047f.jpeg")' }} className="lg:flex w-full h-[300px] lg:h-auto lg:ml-5 bg-cover bg-center flex flex-grow mt-5 px-2">
            </div>

        </div>
    )
}