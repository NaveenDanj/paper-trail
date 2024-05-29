import Footer from "@/components/home/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import GoogleIcon from '@mui/icons-material/Google';


export default function Login() {
    return (
        <div className="flex flex-col w-full">

            <div className="w-full mb-0 flex flex-col gap-5 md:gap-2 sm:flex-row mt-10">

                <div className="flex w-full">
                    <AspectRatio className=" flex justify-center items-center md:block">
                        <Image className="w-full h-full bg-center bg-cover object-cover" src={'/login-banner.png'} width={600} height={300} alt="" />
                    </AspectRatio>
                </div>

                <div className="flex w-full justify-center items-center p-2">

                    <div className="flex flex-col w-full max-w-[400px]">

                        <h1 className="text-3xl font-semibold">Log in to Exclusive</h1>

                        <label className="text-sm mt-3">Enter your details below</label>

                        <div className="pb-2 flex flex-col gap-10 mt-8">

                            <div style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }} className="pb-3 flex w-full ">
                                <input className="w-full" style={{ outline: 'none' }} type="text" placeholder="Email or Phone Number" />
                            </div>

                            <div style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }} className="pb-3 flex w-full ">
                                <input className="w-full" style={{ outline: 'none' }} type="password" placeholder="Password" />
                            </div>

                            <div className="flex flex-row justify-between w-full my-auto">
                                <button className="bg-[#DB4444] rounded-md px-5 justify-center items-center text-white text-sm p-2 w-full max-w-[100px] my-auto">Log In</button>

                                <center><label className="text-[#DB4444] my-auto font-semibold cursor-pointer">Forget password?</label></center>
                            </div>


                        </div>

                    </div>


                </div>

            </div>
            <Footer />

        </div>
    )
}