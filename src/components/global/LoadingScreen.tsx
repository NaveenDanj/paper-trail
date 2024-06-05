'use client'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import AutorenewIcon from '@mui/icons-material/Autorenew';

type IProp = {
    open: boolean;
}


export function LoadingScreen({ open }: IProp) {
    return (
        <AlertDialog open={open} >
            <AlertDialogContent className='w-[50px] h-[30px] flex justify-center items-center'>
                <AutorenewIcon className='text-xl animate-spin' />
            </AlertDialogContent>
        </AlertDialog>
    )
}

export function LoadingInlineComponent() {
    return (<AutorenewIcon className='text-xl animate-spin' />)
}
