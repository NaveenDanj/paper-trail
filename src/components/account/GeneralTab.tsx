"use client"

import { auth } from "@/firebase/config"
import { User } from "@/types/types"
import { signOut } from "firebase/auth"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { LoadingScreen } from "../global/LoadingScreen"

type IProp = {
    user: User
}

export default function GeneralTab({ user }: IProp) {

    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter()

    const [formData, setFormData] = useState<User>(user)


    const handleLogout = async () => {

        try {
            setLoading(true)
            await signOut(auth)
            setLoading(false)
            router.replace('/auth/login')
        } catch (err) {
            setLoading(false)
            console.log(err)
        }

    }


    return (
        <>
            <h1 className="text-xl text-[#DB4444]">Edit Your Profile</h1>

            <div className="flex flex-col w-full gap-2">
                <div className="flex flex-row w-full mt-5 gap-5">
                    <div className="flex w-full flex-col gap-2">
                        <label className="font-bold text-sm">Full Name</label>
                        <div className="w-full flex bg-[#F5F5F5] p-2">
                            <input required value={formData.fullName} onChange={(e) => setFormData((prevData: User) => ({ ...prevData, email: e.target.value }))} placeholder="Enter the full name" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                        </div>
                    </div>

                    <div className="flex w-full flex-col gap-2">
                        <label className="font-bold text-sm">Phone Number</label>
                        <div className="w-full flex bg-[#F5F5F5] p-2">
                            <input required value={formData.phone} onChange={(e) => setFormData((prevData: User) => ({ ...prevData, phone: e.target.value }))} placeholder="Enter the phone number" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="phone" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full mt-5 gap-5">
                    <div className="flex w-full flex-col gap-2">
                        <label className="font-bold text-sm">Email</label>
                        <div className="w-full flex bg-[#F5F5F5] p-2">
                            <input disabled required value={formData.email} onChange={(e) => setFormData((prevData: User) => ({ ...prevData, email: e.target.value }))} placeholder="Enter the email" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="email" />
                        </div>
                    </div>

                    <div className="flex w-full flex-col gap-2">
                        <label className="font-bold text-sm">Address</label>
                        <div className="w-full flex bg-[#F5F5F5] p-2">
                            <input required value={formData.streetAddress} onChange={(e) => setFormData((prevData: User) => ({ ...prevData, streetAddress: e.target.value }))} placeholder="Enter the street address" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                        </div>
                    </div>
                </div>


                <div className="flex flex-col w-full mt-5 gap-5">
                    <label className="font-bold text-sm">Password Changes</label>

                    <div className="w-full flex bg-[#F5F5F5] p-2">
                        <input placeholder="Current password" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                    </div>

                    <div className="w-full flex bg-[#F5F5F5] p-2">
                        <input placeholder="New Password" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                    </div>

                    <div className="w-full flex bg-[#F5F5F5] p-2">
                        <input placeholder="Confirm New Password" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                    </div>
                </div>

                <div className="flex flex-row justify-end gap-4 mt-5">
                    <button onClick={handleLogout} style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="bg-[white] w-[150px] rounded-md px-2 justify-center items-center text-black font-semibold text-sm p-3 ">Logout</button>
                    <button className="bg-[#DB4444] w-[150px] rounded-md px-2 justify-center items-center text-white font-semibold text-sm p-3 ">Save Changes</button>
                </div>

                <LoadingScreen open={loading} />

            </div>
        </>
    )
}