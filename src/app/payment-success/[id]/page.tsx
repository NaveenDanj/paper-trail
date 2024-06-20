'use client'

import Footer from "@/components/home/Footer";
import Lottie from "lottie-react";
import Anim from "@/animations/OrderComplete.json";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function OrderComplete() {
    return (

        <div className="w-full flex flex-col">

            <div className="flex flex-col px-3 lg:px-24 mt-10 pb-10 ">

                <div className="flex lg:flex-row flex-col w-full justify-between ">

                    <div className="w-full flex justify-center items-center">
                        <Lottie className=" object-cover items-center" width={100} height={100} animationData={Anim} loop={true} />
                    </div>

                    <div className="w-full flex flex-col justify-center items-center">

                        <div className="flex flex-col w-full gap-3">
                            <div className="flex gap-2">
                                <CheckCircleOutlineIcon sx={{ fontSize: 40 }} className="text-green-500 font-bold my-auto" />
                                <h1 className="font-semibold text-2xl my-auto">Thank you for your order!</h1>
                            </div>

                            <label className="font-semibold text-medium my-auto">Your order number is 7DVJGTZLSK</label>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <label className="font-semibold text-medium my-auto">What's next?</label>

                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 pl-3">
                                <li><span className="text-sm font-semibold">We will send confirmation of the order and information about its progress by e-mail.</span></li>
                                <li><span className="text-sm font-semibold">The order will be processed after your payment is confirmed.</span></li>
                                <li><span className="text-sm font-semibold">In case of problems with the payment, you will receive a new link to renew the payment to the e-mail address provided</span></li>
                                <li><span className="text-sm font-semibold">Please feel free to contact us if you have any questions</span></li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </div>

    )
}