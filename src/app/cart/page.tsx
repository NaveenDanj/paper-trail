import Footer from "@/components/home/Footer";
import Image from "next/image";

export default function Cart() {
    return (
        <div className="w-full flex flex-col">

            <div className="flex flex-col px-3 lg:px-24 mt-10 pb-10 ">

                <div className="mt-8 w-full ">

                    <div className="w-full grid grid-cols-4 lg:grid lg:grid-cols-6 p-3 shadow-lg">
                        <div className="col-span-2 w-full font-semibold">
                            <label>Product</label>
                        </div>

                        <div className="w-full hidden lg:flex font-semibold">
                            <label>Price</label>
                        </div>
                        <div className="w-full font-semibold">
                            <label>Quantity</label>
                        </div>
                        <div className="w-full font-semibold text-right">
                            <label>Subtotal</label>
                        </div>
                    </div>

                    <div className="flex w-full flex-col gap-5">

                        <div className=" p-3 w-full flex-col gap-5 grid grid-cols-4 lg:grid lg:grid-cols-6 mt-7 shadow-lg">

                            <div className="flex col-span-2 my-auto">
                                <Image alt="" width={50} height={50} src={'https://www.promateworld.com/storage/mango/paper/bpfg0370-rathna-foolscap-square-a3-250-sheets-pack-150x150.png'} />

                                <div className="my-auto flex flex-col">
                                    <label className="text-sm font-semibold">HAVIT HV-G92 Gamepad</label>
                                    <label className="text-sm font-bold lg:hidden">$650</label>
                                </div>
                            </div>

                            <div className=" text-left my-auto hidden lg:flex">
                                <label className="text-sm font-semibold">$650</label>
                            </div>

                            <div className="justify-start w-full my-auto">
                                <input type="number" className="max-w-[80px] rounded-md pl-2" style={{ border: '1px solid rgba(0,0,0,0.2)' }} />
                            </div>

                            <div className=" text-right my-auto">
                                <label className="text-sm font-semibold">$650</label>
                            </div>

                        </div>

                        <div className=" p-3 w-full flex-col gap-5 grid grid-cols-4 lg:grid lg:grid-cols-6 mt-7 shadow-lg">

                            <div className="flex col-span-2 my-auto">
                                <Image alt="" width={50} height={50} src={'https://www.promateworld.com/storage/mango/paper/bpfg0370-rathna-foolscap-square-a3-250-sheets-pack-150x150.png'} />

                                <div className="my-auto flex flex-col">
                                    <label className="text-sm font-semibold">HAVIT HV-G92 Gamepad</label>
                                    <label className="text-sm font-bold lg:hidden">$650</label>
                                </div>
                            </div>

                            <div className=" text-left my-auto hidden lg:flex">
                                <label className="text-sm font-semibold">$650</label>
                            </div>

                            <div className="justify-start w-full my-auto">
                                <input type="number" className="max-w-[80px] rounded-md pl-2" style={{ border: '1px solid rgba(0,0,0,0.2)' }} />
                            </div>

                            <div className=" text-right my-auto">
                                <label className="text-sm font-semibold">$650</label>
                            </div>

                        </div>

                        <div className=" p-3 w-full flex-col gap-5 grid grid-cols-4 lg:grid lg:grid-cols-6 mt-7 shadow-lg">

                            <div className="flex col-span-2 my-auto">
                                <Image alt="" width={50} height={50} src={'https://www.promateworld.com/storage/mango/paper/bpfg0370-rathna-foolscap-square-a3-250-sheets-pack-150x150.png'} />

                                <div className="my-auto flex flex-col">
                                    <label className="text-sm font-semibold">HAVIT HV-G92 Gamepad</label>
                                    <label className="text-sm font-bold lg:hidden">$650</label>
                                </div>
                            </div>

                            <div className=" text-left my-auto hidden lg:flex">
                                <label className="text-sm font-semibold">$650</label>
                            </div>

                            <div className="justify-start w-full my-auto">
                                <input type="number" className="max-w-[80px] rounded-md pl-2" style={{ border: '1px solid rgba(0,0,0,0.2)' }} />
                            </div>

                            <div className=" text-right my-auto">
                                <label className="text-sm font-semibold">$650</label>
                            </div>

                        </div>

                        <div className=" p-3 w-full flex-col gap-5 grid grid-cols-4 lg:grid lg:grid-cols-6 mt-7 shadow-lg">

                            <div className="flex col-span-2 my-auto">
                                <Image alt="" width={50} height={50} src={'https://www.promateworld.com/storage/mango/paper/bpfg0370-rathna-foolscap-square-a3-250-sheets-pack-150x150.png'} />

                                <div className="my-auto flex flex-col">
                                    <label className="text-sm font-semibold">HAVIT HV-G92 Gamepad</label>
                                    <label className="text-sm font-bold lg:hidden">$650</label>
                                </div>
                            </div>

                            <div className=" text-left my-auto hidden lg:flex">
                                <label className="text-sm font-semibold">$650</label>
                            </div>

                            <div className="justify-start w-full my-auto">
                                <input type="number" className="max-w-[80px] rounded-md pl-2" style={{ border: '1px solid rgba(0,0,0,0.2)' }} />
                            </div>

                            <div className=" text-right my-auto">
                                <label className="text-sm font-semibold">$650</label>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="flex w-full justify-between mt-10">
                    <button style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="my-auto rounded-md px-5 justify-center items-center text-black text-sm p-2 font-semibold">Return To Shop</button>
                    <button style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="my-auto rounded-md px-5 justify-center items-center text-black text-sm p-2 font-semibold">Clear Cart</button>
                </div>

                <div className="flex flex-col lg:flex-row w-full mt-10 gap-5">

                    <div className="flex flex-col w-full justify-start">

                        <div className="flex gap-2 ">
                            <div style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="p-1 px-2 flex w-full max-w-[280px] my-auto">
                                <input className="w-full" style={{ outline: 'none' }} type="text" placeholder="Coupon Code" />
                            </div>
                            <button className="bg-[#DB4444] rounded-md px-2 justify-center items-center text-white text-xs p-1 ">Apply Coupon</button>
                        </div>


                    </div>

                    <div className="w-full flex justify-start md:justify-center lg:justify-end lg:mt-0 mt-5">

                        <div style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="flex flex-col p-3 w-full max-w-[500px]">

                            <h1 className=" font-semibold">Cart Total</h1>

                            <div className="w-full flex flex-col gap-3 mt-5">

                                <div style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }} className="flex justify-between w-full pb-3">
                                    <label className=" font-medium text-sm">Subtotal:</label>
                                    <label className=" font-medium text-sm">$1750</label>
                                </div>

                                <div style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }} className="flex justify-between w-full pb-3">
                                    <label className=" font-medium text-sm">Subtotal:</label>
                                    <label className=" font-medium text-sm">$1750</label>
                                </div>

                                <div className="flex justify-between w-full pb-3">
                                    <label className=" font-medium text-sm">Subtotal:</label>
                                    <label className=" font-medium text-sm">$1750</label>
                                </div>

                            </div>

                            <div className="mt-5 flex justify-center">
                                <button className="bg-[#DB4444] rounded-md px-2 justify-center items-center text-white text-sm p-2 ">Proceed to checkout</button>
                            </div>


                        </div>


                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}