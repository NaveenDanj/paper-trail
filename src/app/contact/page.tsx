import Footer from "@/components/home/Footer";
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function Contact() {
    return (
        <div className="w-full flex flex-col">

            <div className="flex flex-col px-3 lg:px-24 mt-10 pb-10 ">

                <div className="flex flex-col lg:flex-row w-full mt-5 gap-6">

                    <div className="p-3 w-full flex flex-col shadow-lg">

                        <div className="flex gap-3 mb-5">
                            <div className="flex justify-center items-center p-2 bg-[#DB4444] rounded-full text-white">
                                <PhoneOutlinedIcon />
                            </div>

                            <label className="text-md my-auto font-semibold">Call To Us</label>
                        </div>


                        <p className=" font-normal">We are available 24/7, 7 days a week.</p>
                        <p className="mt-3 font-normal mb-5"><span className="font-semibold">Phone:</span> +94 71 974 9699</p>

                        <div className="" style={{ borderTop: '1px solid rgba(0,0,0,0.4)' }}></div>

                        <div className="flex gap-3 mb-5 mt-5">
                            <div className="flex justify-center items-center p-2 bg-[#DB4444] rounded-full text-white">
                                <EmailOutlinedIcon />
                            </div>

                            <label className="text-md my-auto font-semibold">Write To US</label>
                        </div>

                        <p className=" font-normal">Fill out our form and we will contact you within 24 hours.</p>
                        <p className="mt-3 font-normal"><span className="font-semibold">Emails:</span> thepapertrailonlinestore@gmail.com</p>
                        <p className="mt-3 font-normal"><span className="font-semibold">Address:</span> No 21/1, Jayanthi Vidyala Mawatha, Nampamunuwa, Piliyandala</p>


                    </div>

                    <div className="flex flex-col gap-5 p-3 w-full shadow-lg">

                        <div className="flex gap-5 flex-col lg:flex-row w-full lg:gap-2">

                            <div className="w-full flex bg-[#F5F5F5] p-2">
                                <input className="w-full px-2 bg-[#F5F5F5]" placeholder="Your Name *" style={{ outline: 'none' }} type="text" />
                            </div>

                            <div className="w-full flex bg-[#F5F5F5] p-2">
                                <input className="w-full px-2 bg-[#F5F5F5]" placeholder="Your Email *" style={{ outline: 'none' }} type="email" />
                            </div>

                            <div className="w-full flex bg-[#F5F5F5] p-2">
                                <input className="w-full px-2 bg-[#F5F5F5]" placeholder="Your Phone *" style={{ outline: 'none' }} type="text" />
                            </div>

                        </div>

                        <div className="flex w-full">
                            <div className="w-full flex bg-[#F5F5F5] p-2">
                                <textarea rows={10} className="w-full px-2 bg-[#F5F5F5]" placeholder="Your Massage" style={{ outline: 'none' }} />
                            </div>
                        </div>

                        <div className="w-full flex justify-end">
                            <button className="bg-[#DB4444] w-[150px] rounded-md px-2 justify-center items-center text-white text-sm p-2 ">Send Massage</button>
                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}