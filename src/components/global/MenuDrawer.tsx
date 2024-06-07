import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";



export default function MenuDrawer() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <MenuIcon className="flex cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Main Menu</SheetTitle>
                    <SheetDescription>
                        <center><label>Welcome to The Paper Trail! Discover high-quality stationery to inspire creativity and enhance productivity, with exceptional service and fast shipping. Happy shopping!</label></center>
                    </SheetDescription>
                </SheetHeader>

                <div className="flex flex-col w-full h-full">

                    <div className="flex flex-col gap-6 mt-5">
                        <Link href={'/'}><label className="text-xl cursor-pointer hover:underline">Home</label></Link>
                        <label className="text-xl cursor-pointer hover:underline">Products</label>
                        <Link href={'/contact'}><label className="text-xl cursor-pointer hover:underline">Contact</label></Link>
                        <label className="text-xl cursor-pointer hover:underline">About</label>
                        <Link href={'/auth/register'}><label className="text-xl cursor-pointer hover:underline">Sign Up</label></Link>
                        <Link href={'/cart'}><label className="text-xl cursor-pointer hover:underline">Cart</label></Link>
                        <Link href={'/wishlist'}><label className="text-xl cursor-pointer hover:underline">Wish list</label></Link>
                    </div>


                </div>
                <div className="pb-10">
                    asd
                </div>
            </SheetContent>
        </Sheet>
    )
}