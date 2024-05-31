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



export default function MenuDrawer() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <MenuIcon className="ml-4 flex cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when youre done.
                    </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col w-full h-full bg-blue-500">

                    <div className="flex flex-col bg-red-500">
                        asd
                        <div className="bg-green-500 flex flex-grow">
                            asdsssss
                        </div>
                    </div>


                </div>
                <div className="pb-10">
                    asd
                </div>
            </SheetContent>
        </Sheet>
    )
}