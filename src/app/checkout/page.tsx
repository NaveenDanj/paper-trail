import Footer from "@/components/home/Footer";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image";

export default function Checkout() {
    return (
        <div className="w-full flex flex-col">

            <div className="flex flex-col px-10 lg:px-24 mt-10 pb-10 ">

                <div className="flex flex-col lg:flex-row w-full gap-3">

                    <div className="flex flex-col w-full">

                        <h1 className="text-3xl font-semibold">Billing Details</h1>

                        <div className="flex flex-col gap-5 w-full mt-10">

                            <div className="flex w-full flex-col gap-2">
                                <label className="text-[#7D8184] text-sm">First Name*</label>
                                <div className="w-full flex bg-[#F5F5F5] p-2">
                                    <input className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col gap-2">
                                <label className="text-[#7D8184] text-sm">Company Name</label>
                                <div className="w-full flex bg-[#F5F5F5] p-2">
                                    <input className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col gap-2">
                                <label className="text-[#7D8184] text-sm">Street Address*</label>
                                <div className="w-full flex bg-[#F5F5F5] p-2">
                                    <input className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col gap-2">
                                <label className="text-[#7D8184] text-sm">Apartment, floor, etc. (optional)</label>
                                <div className="w-full flex bg-[#F5F5F5] p-2">
                                    <input className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col gap-2">
                                <label className="text-[#7D8184] text-sm">Town/City*</label>
                                <div className="w-full flex bg-[#F5F5F5] p-2">
                                    <input className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col gap-2">
                                <label className="text-[#7D8184] text-sm">Phone Number*</label>
                                <div className="w-full flex bg-[#F5F5F5] p-2">
                                    <input className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col gap-2">
                                <label className="text-[#7D8184] text-sm">Email Address*</label>
                                <div className="w-full flex bg-[#F5F5F5] p-2">
                                    <input className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className="flex justify-center lg:justify-end items-center w-full mt-10 lg:mt-0">

                        <div className="flex w-full flex-col gap-8 py-3 max-w-[350px]">

                            <div className="flex w-full justify-between">

                                <div className="flex gap-3 my-auto">
                                    <Image alt="" width={40} height={40} src={'https://www.promateworld.com/storage/mango/paper/bpfg0370-rathna-foolscap-square-a3-250-sheets-pack-150x150.png'} />

                                    <div className="my-auto ">
                                        <label className="text-sm font-semibold">HAVIT HV-G92 Gamepad</label>
                                    </div>

                                </div>

                                <label className="text-sm font-semibold my-auto">$650</label>

                            </div>

                            <div className="flex w-full justify-between">

                                <div className="flex gap-3 my-auto">
                                    <Image alt="" width={40} height={40} src={'https://www.promateworld.com/storage/mango/paper/bpfg0370-rathna-foolscap-square-a3-250-sheets-pack-150x150.png'} />

                                    <div className="my-auto ">
                                        <label className="text-sm font-semibold">HAVIT HV-G92 Gamepad</label>
                                    </div>

                                </div>

                                <label className="text-sm font-semibold my-auto">$650</label>

                            </div>

                            <div className="w-full flex flex-col gap-3 mt-5">

                                <div style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }} className="flex justify-between w-full pb-3">
                                    <label className=" font-medium text-sm">Subtotal:</label>
                                    <label className=" font-medium text-sm">$1750</label>
                                </div>

                                <div style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }} className="flex justify-between w-full pb-3">
                                    <label className=" font-medium text-sm">Shipping:</label>
                                    <label className=" font-medium text-sm">$1750</label>
                                </div>

                                <div style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }} className="flex justify-between w-full pb-3">
                                    <label className=" font-medium text-sm">Discount:</label>
                                    <label className=" font-medium text-sm">$1750</label>
                                </div>

                                <div className="flex justify-between w-full pb-3">
                                    <label className=" font-medium text-sm">Total:</label>
                                    <label className=" font-medium text-sm">$1750</label>
                                </div>

                            </div>

                            <div className="w-full mt-0">
                                <RadioGroup defaultValue="card">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="card" id="r2" />
                                        <label htmlFor="r2">Card</label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="default" id="r1" />
                                        <label htmlFor="r1">Bank</label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="comfortable" id="r2" />
                                        <label htmlFor="r2">Cash on delivery</label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="w-full flex flex-col gap-4">

                                <div className="flex flex-row gap-2 justify-between w-full">
                                    <div style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="rounded-md p-1 px-2 flex w-full my-auto">
                                        <input className="w-full" style={{ outline: 'none' }} type="text" placeholder="Coupon Code" />
                                    </div>
                                    <button className="bg-[#DB4444] w-[150px] rounded-md px-2 justify-center items-center text-white text-xs p-1 ">Apply Coupon</button>
                                </div>

                                <div className="w-full mt-5">
                                    <button className="bg-[#DB4444] w-[150px] rounded-md px-2 justify-center items-center text-white text-sm p-3 ">Place Order</button>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}