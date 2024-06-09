import UserCommentItem from "./UserComment";


export default function CustomerReviews() {
    return (
        <div className="flex w-full lg:w-[50%] flex-col">

            <div className="flex flex-col gap-3 w-full">
                <UserCommentItem />
                <UserCommentItem />
                <UserCommentItem />

                <button style={{ border: '1px solid rgba(0,0,0,0.2)' }} type='submit' className=" mt-5  rounded-md px-2 justify-center items-center text-black font-semibold text-sm p-2 ">Load more</button>

            </div>

        </div>
    )
}