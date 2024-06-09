import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import StarIcon from '@mui/icons-material/Star';


export default function UserCommentItem() {
    return (
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.2)' }} className="flex flex-row gap-3 py-4">
            <Avatar className=" w-16 h-16 ">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col flex-grow">

                <div className="flex flex-col w-full">

                    <div className="flex w-full justify-between">
                        <label className="text-md font-bold">Vincent Burgess</label>
                    </div>
                    <label className="text-xs text-slate-400">30 July 2022</label>

                </div>

                <div className="flex my-auto mt-5">
                    <StarIcon className="text-sm text-[#FFAD33]" />
                    <StarIcon className="text-sm text-[#FFAD33]" />
                    <StarIcon className="text-sm text-[#FFAD33]" />
                    <StarIcon className="text-sm text-[#FFAD33]" />
                    <StarIcon className="text-sm text-[#FFAD33]" />
                    <label className="my-auto  ml-2 font-bold text-xs">Very good </label>
                </div>

                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deserunt hic ullam repellat aliquid architecto enim veniam ab. Expedita inventore ipsum porro fugit iusto molestias dolor? Inventore sunt consequatur quae?</p>

            </div>

        </div>
    )
}