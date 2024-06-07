import { User } from "@/types/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SuccessAlert from "../global/SuccessPage";
import { handleSaveUserOrderInfo } from "@/actions/UserAction";
import { LoadingScreen } from "../global/LoadingScreen";

type IProp = {
    user: User
}


export default function PaymentOptionTab({ user }: IProp) {

    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<User>(user)
    const [success, setSuccess] = useState<string>('')
    const [error, setError] = useState<string>('')


    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            setLoading(true)
            setSuccess('')
            setError('')

            const res = await handleSaveUserOrderInfo(formData);

            if (res.success) {
                setSuccess(res.message)
                setLoading(false)
                window.location.reload();
                return
            }


        } catch (err) {
            // @ts-ignore
            setError(err)
            setLoading(false)
        }
    }


    return (
        <>
            <h1 className="mb-4 text-xl text-[#DB4444]">Order Information</h1>

            {success != '' && <SuccessAlert message="Payment information updated successfully!" />}
            {error != '' && <SuccessAlert message="Payment information updated successfully!" />}

            <form onSubmit={handleSubmit} className="mt-2 flex flex-col w-full gap-2">
                <div className="flex flex-row w-full mt-5 gap-5">
                    <div className="flex w-full flex-col gap-2">
                        <label className="font-bold text-sm">City</label>
                        <div className="w-full flex bg-[#F5F5F5] p-2">
                            <input required value={formData.city} onChange={(e) => setFormData((prevData: User) => ({ ...prevData, city: e.target.value }))} placeholder="Enter the city" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                        </div>
                    </div>

                    <div className="flex w-full flex-col gap-2">
                        <label className="font-bold text-sm">Apartment</label>
                        <div className="w-full flex bg-[#F5F5F5] p-2">
                            <input required value={formData.apartment} onChange={(e) => setFormData((prevData: User) => ({ ...prevData, apartment: e.target.value }))} placeholder="Enter the apartment" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full mt-5 gap-5">
                    <div className="flex w-full flex-col gap-2">
                        <label className="font-bold text-sm">Company Name</label>
                        <div className="w-full flex bg-[#F5F5F5] p-2">
                            <input required value={formData.companyName} onChange={(e) => setFormData((prevData: User) => ({ ...prevData, companyName: e.target.value }))} placeholder="Enter the company name" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full mt-5 gap-5">
                    <div className="flex w-full flex-col gap-2">
                        <label className="font-bold text-sm">Zip Code</label>
                        <div className="w-full flex bg-[#F5F5F5] p-2">
                            <input required value={formData.zip} onChange={(e) => setFormData((prevData: User) => ({ ...prevData, zip: e.target.value }))} placeholder="Enter the zip code" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full mt-5 gap-5">
                    <div className="flex w-full flex-col gap-2">
                        <label className="font-bold text-sm">Street Address</label>
                        <div className="w-full flex bg-[#F5F5F5] p-2">
                            <textarea required value={formData.streetAddress} onChange={(e) => setFormData((prevData: User) => ({ ...prevData, streetAddress: e.target.value }))} placeholder="Enter the street address" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} rows={10} ></textarea>
                        </div>
                    </div>
                </div>


                <div className="flex flex-row justify-end gap-4 mt-5">
                    <button type="reset" style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="bg-[white] w-[150px] rounded-md px-2 justify-center items-center text-black font-semibold text-sm p-3 ">Reset</button>
                    <button type='submit' className="bg-[#DB4444] w-[150px] rounded-md px-2 justify-center items-center text-white font-semibold text-sm p-3 ">Save Changes</button>
                </div>

                <LoadingScreen open={loading} />

            </form>

        </>
    )
}