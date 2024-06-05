"use client"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Input } from "@/components/ui/input";
import MenuDrawer from '../global/MenuDrawer';
import Link from 'next/link';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import useCurrentUser from '@/hooks/currentUser';
import { useEffect } from 'react';

export default function Header() {

    const { user, isLoading } = useCurrentUser();


    useEffect(() => {
        console.log("user is => ", user)

    }, [user])


    return (
        <div style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="w-full flex justify-between pt-10 pb-5 px-10 lg:px-24">

            <div className="my-auto">
                <h1 className="text-xl font-bold">Paper Trail</h1>
            </div>

            <div className="hidden my-auto lg:flex gap-10 justify-between">
                <Link href='/'><label className="hover:underline cursor-pointer">Home</label></Link>
                <Link href='/contact'><label className="hover:underline cursor-pointer">Contact</label></Link>
                <Link href='/about'><label className="hover:underline cursor-pointer">About</label></Link>
                <Link href='/auth/register'><label className="hover:underline cursor-pointer">Sign Up</label></Link>
            </div>


            <div className="my-auto flex gap-5">

                <div className="hidden my-auto lg:flex ">
                    <Input type="text" placeholder="What are you looking for?" />
                </div>

                <div className="flex my-auto gap-5 ">
                    <FavoriteBorderIcon className="cursor-pointer" />
                    <ShoppingCartOutlinedIcon className="cursor-pointer" />
                    {user && <Link href={'/account'}><AccountCircleOutlinedIcon className='cursor-pointer' /></Link>}
                    <MenuDrawer />
                </div>

            </div>

        </div>
    )
}