import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="w-full bg-black flex flex-col justify-start items-start px-6 mt-16">

            <div className="w-full grid grid-cols-1 lg:flex gap-12 lg:flex-row lg:gap-5 lg:justify-between py-5 text-white">

                <div className="flex flex-col w-full">
                    <h1 className="text-xl font-bold">Paper Trail</h1>
                    <h1 className="text-md mt-4">Subscribe</h1>
                    <label className="mt-3 text-sm">Get 10% off your first order</label>

                    <div style={{ border: '1px solid rgba(255,255,255,0.5)' }} className="flex gap-2 justify-between w-full lg:w-[80%] p-1 px-2 mt-4 rounded-md">
                        <input placeholder="Enter your email" style={{ outline: 'none' }} className="bg-black text-white" type="email" />
                        <button><SendOutlinedIcon className='text-md my-auto' /></button>
                    </div>

                </div>

                <div className="flex flex-col w-full">
                    <h1 className="text-xl font-semibold">Support</h1>
                    <label className="mt-3 text-sm">No 21/1, Jayanthi Vidyala Mawatha,<br /> Nampamunuwa, Piliyandala</label>
                    <label className="mt-3 text-sm">thepapertrailonlinestore@gmail.com</label>
                    <label className="mt-3 text-sm">+94 71 974 9699</label>
                </div>

                <div className='flex flex-row justify-between w-full'>

                    <div className="flex flex-col w-full">
                        <Link href={'/account'}><h1 className="cursor-pointer  text-xl font-semibold">Account</h1></Link>
                        <Link href={'/auth/login'}><label className="cursor-pointer mt-3 text-sm">Login / Register</label></Link>
                        <Link href={'/cart'}><label className="cursor-pointer mt-3 text-sm">Cart</label></Link>
                        <Link href={'/wishlist'}><label className="cursor-pointer mt-3 text-sm">Wishlist</label></Link>
                        <Link href={'/'}><label className="cursor-pointer mt-3 text-sm">Shop</label></Link>
                    </div>


                    <div className="flex flex-col w-full">
                        <h1 className="text-xl font-semibold">Quick Links</h1>
                        <Link href={'/return-policy'}><label className="cursor-pointer mt-3 text-sm">Return Policy</label></Link>
                        <Link href={'/terms'}><label className="cursor-pointer mt-3 text-sm">Terms Of Use</label></Link>
                        <Link href={'/contact'}><label className="cursor-pointer mt-3 text-sm">Contact</label></Link>
                        {/* <label className="mt-3 text-sm">Shop</label> */}
                    </div>

                </div>


                {/* <div></div> */}

            </div>

        </div>
    )
}