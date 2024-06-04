export default function GeneralTab() {
    return (
        <>
            <h1 className="text-xl text-[#DB4444]">Edit Your Profile</h1>

            <div className="flex flex-col w-full gap-2">
                <div className="flex flex-row w-full mt-5 gap-5">
                    <div className="flex w-full flex-col gap-2">
                        <label className="font-bold text-sm">First Name</label>
                        <div className="w-full flex bg-[#F5F5F5] p-2">
                            <input placeholder="Enter the first name" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                        </div>
                    </div>

                    <div className="flex w-full flex-col gap-2">
                        <label className="font-bold text-sm">First Name</label>
                        <div className="w-full flex bg-[#F5F5F5] p-2">
                            <input placeholder="Enter the last name" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full mt-5 gap-5">
                    <div className="flex w-full flex-col gap-2">
                        <label className="font-bold text-sm">Email</label>
                        <div className="w-full flex bg-[#F5F5F5] p-2">
                            <input placeholder="Enter the first name" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
                        </div>
                    </div>

                    <div className="flex w-full flex-col gap-2">
                        <label className="font-bold text-sm">Address</label>
                        <div className="w-full flex bg-[#F5F5F5] p-2">
                            <input placeholder="Enter the last name" className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} type="text" />
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
                    <button style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="bg-[white] w-[150px] rounded-md px-2 justify-center items-center text-black font-semibold text-sm p-3 ">Logout</button>
                    <button className="bg-[#DB4444] w-[150px] rounded-md px-2 justify-center items-center text-white font-semibold text-sm p-3 ">Save Changes</button>
                </div>

            </div>
        </>
    )
}