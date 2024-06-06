"use client"
import GeneralTab from "@/components/account/GeneralTab";
import PaymentOptionTab from "@/components/account/PaymentOptionTab";
import { LoadingInlineComponent, LoadingScreen } from "@/components/global/LoadingScreen";
import Footer from "@/components/home/Footer";
import useCurrentUser from "@/hooks/currentUser";
import { useRouter } from 'next/navigation'
import { useState } from "react";

export default function Account() {

    const { user, isLoading } = useCurrentUser();
    const router = useRouter()
    const [currentTab, setCurrentTab] = useState<number>(0)

    if (isLoading) {
        return (
            <div className="w-full flex h-full justify-center items-center">
                <LoadingInlineComponent />
            </div>
        )
    }

    if (!user) {
        router.replace('/auth/login')
    }

    if (user) {
        return (
            <div className="w-full flex flex-col">

                <div className="flex flex-col px-3 lg:px-24 mt-10 pb-10 ">
                    <div className="flex flex-col lg:flex-row w-full mt-5 gap-6">

                        <div className="flex flex-col gap-4 w-[250px]">

                            <div className="flex flex-col">
                                <label className=" font-bold">Manage My Account</label>
                                <div className="ml-5 mt-3 flex flex-col gap-2 ">
                                    <label style={{ color: currentTab == 0 ? '#DB4444' : 'black' }} onClick={() => setCurrentTab(0)} className="text-sm font-normal cursor-pointer">My Profile</label>
                                    <label style={{ color: currentTab == 1 ? '#DB4444' : 'black' }} onClick={() => setCurrentTab(1)} className="text-sm font-normal cursor-pointer">My Order Information</label>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className=" font-bold">My Orders</label>
                                <div className="ml-5 mt-3 flex flex-col gap-2 ">
                                    <label style={{ color: currentTab == 2 ? '#DB4444' : 'black' }} onClick={() => setCurrentTab(2)} className="text-sm font-normal cursor-pointer">My Returns</label>
                                    <label style={{ color: currentTab == 3 ? '#DB4444' : 'black' }} onClick={() => setCurrentTab(3)} className="text-sm font-normal cursor-pointer">My Cancellations</label>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col shadow-lg flex-grow p-5">
                            {currentTab == 0 && <GeneralTab user={user} />}
                            {currentTab == 1 && <PaymentOptionTab user={user} />}
                            {/* <PaymentOptionTab /> */}
                        </div>

                    </div>
                </div>

                <Footer />

            </div>
        )
    }

}