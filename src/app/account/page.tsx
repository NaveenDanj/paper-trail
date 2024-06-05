import GeneralTab from "@/components/account/GeneralTab";
import PaymentOptionTab from "@/components/account/PaymentOptionTab";
import { LoadingScreen } from "@/components/global/LoadingScreen";
import Footer from "@/components/home/Footer";

export default function Account() {
    return (
        <div className="w-full flex flex-col">

            <div className="flex flex-col px-3 lg:px-24 mt-10 pb-10 ">
                <div className="flex flex-col lg:flex-row w-full mt-5 gap-6">

                    <div className="flex flex-col gap-4 w-[250px]">

                        <div className="flex flex-col">
                            <label className=" font-bold">Manage My Account</label>
                            <div className="ml-5 mt-3 flex flex-col gap-2 ">
                                <label className="text-sm font-normal cursor-pointer">My Profile</label>
                                <label className="text-sm font-normal cursor-pointer">My Order Information</label>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className=" font-bold">My Orders</label>
                            <div className="ml-5 mt-3 flex flex-col gap-2 ">
                                <label className="text-sm font-normal cursor-pointer">My Returns</label>
                                <label className="text-sm font-normal cursor-pointer">My Cancellations</label>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col shadow-lg flex-grow p-5">
                        {/* <GeneralTab /> */}
                        <PaymentOptionTab />
                    </div>

                </div>
            </div>

            <Footer />

        </div>
    )
}