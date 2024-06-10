export default function Footer() {
    return (
        <div className="w-full bg-black flex flex-col justify-start items-start px-10 lg:px-24 mt-16">

            <div className="w-full grid grid-cols-2 lg:flex gap-5 lg:flex-row lg:justify-between py-5 text-white">

                <div className="flex flex-col w-full">
                    <h1 className="text-xl font-bold">Paper Trail</h1>
                    <h1 className="text-md mt-4">Subscribe</h1>
                    <label className="mt-3 text-sm">Get 10% off your first order</label>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-xl font-semibold">Support</h1>
                    <label className="mt-3 text-sm">111 Bijoy sarani, Dhaka,<br />  DH 1515, Bangladesh.</label>
                    <label className="mt-3 text-sm">exclusive@gmail.com</label>
                    <label className="mt-3 text-sm">+88015-88888-9999</label>
                </div>


                <div className="flex flex-col">
                    <h1 className="text-xl font-semibold">Account</h1>
                    <label className="mt-3 text-sm">Login / Register</label>
                    <label className="mt-3 text-sm">Cart</label>
                    <label className="mt-3 text-sm">Wishlist</label>
                    <label className="mt-3 text-sm">Shop</label>
                </div>

                {/* <div></div> */}

            </div>

        </div>
    )
}