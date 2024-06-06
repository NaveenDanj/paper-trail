import { User } from "@/types/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

type IProp = {
    user: User
}


export default function PaymentOptionTab({ user }: IProp) {

    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter()
    const [formData, setFormData] = useState<User>(user)


    return (
        <>
            <h1 className="text-xl text-[#DB4444]">Order Information</h1>

            <div className="flex flex-col w-full gap-2">
                <div className="flex flex-row w-full mt-5 gap-5">
                    <div className="flex w-full flex-col gap-2">
                        <label className="font-bold text-sm">City</label>
                        <div className="w-full flex bg-[#F5F5F5] p-2">
                            <input placeholder="Enter the city" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                        </div>
                    </div>

                    <div className="flex w-full flex-col gap-2">
                        <label className="font-bold text-sm">Apartment</label>
                        <div className="w-full flex bg-[#F5F5F5] p-2">
                            <input placeholder="Enter the apartment" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full mt-5 gap-5">
                    <div className="flex w-full flex-col gap-2">
                        <label className="font-bold text-sm">Company Name</label>
                        <div className="w-full flex bg-[#F5F5F5] p-2">
                            <input placeholder="Enter the company name" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full mt-5 gap-5">
                    <div className="flex w-full flex-col gap-2">
                        <label className="font-bold text-sm">Zip Code</label>
                        <div className="w-full flex bg-[#F5F5F5] p-2">
                            <input placeholder="Enter the first name" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full mt-5 gap-5">
                    <div className="flex w-full flex-col gap-2">
                        <label className="font-bold text-sm">Street Address</label>
                        <div className="w-full flex bg-[#F5F5F5] p-2">
                            <textarea placeholder="Enter the first name" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} rows={10} ></textarea>
                        </div>
                    </div>
                </div>


                <div className="flex flex-row justify-end gap-4 mt-5">
                    <button style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="bg-[white] w-[150px] rounded-md px-2 justify-center items-center text-black font-semibold text-sm p-3 ">Reset</button>
                    <button className="bg-[#DB4444] w-[150px] rounded-md px-2 justify-center items-center text-white font-semibold text-sm p-3 ">Save Changes</button>
                </div>

            </div>

        </>
    )
}