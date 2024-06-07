"use client"
import Footer from "@/components/home/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '@/firebase/config'
import { AlertError } from "@/components/global/AlertError";
import { GoogleAuthProvider } from "firebase/auth";
import { handleUserSave } from "@/actions/UserAction";
import { User } from "@/types/types";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { LoadingScreen } from "@/components/global/LoadingScreen";


const provider = new GoogleAuthProvider();

export default function Register() {

    const router = useRouter();

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false);

    const handleRegister = async (e: any) => {
        e.preventDefault();

        setError('')
        setLoading(true)

        if (!email || !password) {
            setError('Email or password must be required!')
            setLoading(false)
            return
        }

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const user: User = {
                zip: '',
                uid: res.user.uid + '',
                fullName: name,
                email: res.user.email + '',
                phone: res.user.phoneNumber + '',
                dp: res.user.photoURL + '',
                companyName: "",
                streetAddress: "",
                apartment: "",
                city: ""
            }

            const result = await handleUserSave(JSON.stringify(user))

            if (!result.success) {
                setError(result.message)
                setLoading(false)
                return
            }

            router.replace('/account');
            setLoading(false)

        } catch (err) {
            // @ts-ignore
            setError(err.message + '')
            setLoading(false)
        }

    }


    const handleGoogleSignIn = async () => {
        try {
            setError('')
            setLoading(true)

            const res = await signInWithPopup(auth, provider)

            const user: User = {
                zip: '',
                uid: res.user.uid + '',
                fullName: res.user.displayName + '',
                email: res.user.email + '',
                phone: res.user.phoneNumber + '',
                dp: res.user.photoURL + '',
                companyName: "",
                streetAddress: "",
                apartment: "",
                city: ""
            }

            const result = await handleUserSave(JSON.stringify(user))

            if (!result.success) {
                setError(result.message)
                setLoading(false)
                return
            }

            router.replace('/account');
            setLoading(false)
        } catch (err) {
            // @ts-ignore
            setError(err.message + '')
            setLoading(false)
        }

    }

    return (
        <div className="flex flex-col w-full">

            <div className="w-full mb-0 flex flex-col gap-5 md:gap-2 sm:flex-row mt-10">

                <div className="flex w-full p-5">
                    <AspectRatio className=" flex justify-center items-center md:block">
                        <Image className="w-full h-full bg-center bg-cover object-cover" src={'/login-banner.png'} width={600} height={300} alt="" />
                    </AspectRatio>
                </div>

                <div className="flex w-full justify-center items-center p-2">

                    <div className="flex flex-col w-full max-w-[400px]">

                        <h1 className="text-3xl font-semibold">Create an account</h1>

                        <label className="text-sm mt-3 mb-3">Enter your details below</label>

                        {error != '' && <AlertError errorMassage={error} />}

                        <form method="POST" onSubmit={handleRegister} className="pb-2 flex flex-col gap-10 mt-8">

                            <div style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }} className="pb-3 flex w-full ">
                                <input required onChange={(e) => setName(e.target.value)} value={name} className="w-full" style={{ outline: 'none' }} type="text" placeholder="Name" />
                            </div>

                            <div style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }} className="pb-3 flex w-full ">
                                <input required onChange={(e) => setEmail(e.target.value)} value={email} className="w-full" style={{ outline: 'none' }} type="email" placeholder="Email or Phone Number" />
                            </div>

                            <div style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }} className="pb-3 flex w-full ">
                                <input required onChange={(e) => setPassword(e.target.value)} value={password} className="w-full" style={{ outline: 'none' }} type="password" placeholder="Password" />
                            </div>

                            <div className="flex flex-col gap-5 w-full">
                                <button type="submit" className="bg-[#DB4444] rounded-md px-5 justify-center items-center text-white text-sm p-2 w-full ">Create Account</button>
                                <button onClick={handleGoogleSignIn} style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="rounded-md gap-2 font-semibold px-5 justify-center items-center text-black text-sm p-2 w-full flex ">
                                    <GoogleIcon className="text-sm" />
                                    Sign up with google</button>
                                <center><label>Already have account? <span className=" cursor-pointer underline"><Link href={'/auth/login'}>Log in</Link></span></label></center>
                            </div>


                        </form>

                    </div>


                </div>

            </div>
            <Footer />
            <LoadingScreen open={loading} />
        </div>
    )
}