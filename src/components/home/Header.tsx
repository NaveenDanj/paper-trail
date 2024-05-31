import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import { Input } from "@/components/ui/input";
import MenuDrawer from '../global/MenuDrawer';


export default function Header() {
    return (
        <div style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="w-full flex justify-between pt-10 pb-5 px-10 lg:px-24">

            <div className="my-auto">
                <h1 className="text-xl font-bold">Paper Trail</h1>
            </div>

            <div className="hidden my-auto lg:flex gap-10 justify-between">
                <label className=" underline cursor-pointer">Home</label>
                <label className="cursor-pointer">Contact</label>
                <label className="cursor-pointer">About</label>
                <label className="cursor-pointer">Sign Up</label>
            </div>


            <div className="my-auto flex gap-5">

                <div className="hidden my-auto lg:flex ">
                    <Input type="text" placeholder="What are you looking for?" />
                </div>

                <div className="flex my-auto gap-5 ">
                    <FavoriteBorderIcon className="cursor-pointer" />
                    <ShoppingCartOutlinedIcon className="cursor-pointer" />
                    <MenuDrawer />
                </div>

            </div>

        </div>
    )
}