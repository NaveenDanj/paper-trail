import StarIcon from '@mui/icons-material/Star';
import { Progress } from "@/components/ui/progress"


export default function ReviewSection() {
    return (
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.2)' }} className="flex gap-5 py-10 lg:flex-row flex-col w-full justify-start items-start mt-5 mb-5">

            <div className="flex flex-col w-full">

                <h1 className="text-xl font-bold">Customer Reviews</h1>

                <div className="flex w-full flex-col gap-2 mt-5">
                    <div className="w-full flex bg-[#F5F5F5] p-2 rounded-md">
                        <textarea required placeholder="Share your thoughts with other customers." className="w-full px-2 bg-[#F5F5F5]" style={{ outline: 'none' }} rows={5} ></textarea>
                    </div>

                    <div className="flex flex-row justify-end gap-4 mt-5">
                        <button type='submit' className="bg-[#DB4444] w-[150px] rounded-md px-2 justify-center items-center text-white font-semibold text-sm p-2 ">Save Changes</button>
                    </div>
                </div>

            </div>

            <div className="mt-5 w-full flex justify-center items-center">

                <div style={{ border: '1px solid rgba(0,0,0,0.2)' }} className="rounded-md flex flex-col flex-grow max-w-[400px] py-5 px-3">

                    <label className='text-lg font-semibold'>Overall rating</label>

                    <div className="mt-5 flex w-full lg:gap-3 gap-3">
                        <div className="flex gap-2">
                            <StarIcon className="my-auto text-3xl text-[#FFAD33]" />
                            <label className='lg:text-4xl text-2xl font-bold my-auto'>4.8</label>
                        </div>

                        <div className='flex flex-col w-full my-auto'>
                            <label className='text-md font-semibold'>30 out of 32 (98%)</label>
                            <label className='text-sm text-slate-400'>Customers recommended this product</label>
                        </div>

                    </div>

                    <div className='flex flex-col gap-2 w-full mt-8'>

                        <div className='w-full flex gap-3'>

                            <div className='flex gap-1 my-auto'>
                                <StarIcon className="my-auto text-[20px] text-[#FFAD33]" />
                                <label className='text-lg font-bold my-auto'>5</label>
                            </div>

                            <div className='flex flex-grow my-auto'>
                                <Progress className='text-sm' value={80} />
                            </div>

                            <div>
                                <label className='text-lg my-auto'>25</label>
                            </div>

                        </div>

                        <div className='w-full flex gap-3'>

                            <div className='flex gap-1 my-auto'>
                                <StarIcon className="my-auto text-[20px] text-[#FFAD33]" />
                                <label className='text-lg font-bold my-auto'>4</label>
                            </div>

                            <div className='flex flex-grow my-auto'>
                                <Progress className='text-sm' value={33} />
                            </div>

                            <div>
                                <label className='text-lg my-auto'>25</label>
                            </div>

                        </div>

                        <div className='w-full flex gap-3'>

                            <div className='flex gap-1 my-auto'>
                                <StarIcon className="my-auto text-[20px] text-[#FFAD33]" />
                                <label className='text-lg font-bold my-auto'>3</label>
                            </div>

                            <div className='flex flex-grow my-auto'>
                                <Progress className='text-sm' value={10} />
                            </div>

                            <div>
                                <label className='text-lg my-auto'>25</label>
                            </div>

                        </div>

                        <div className='w-full flex gap-3'>

                            <div className='flex gap-1 my-auto'>
                                <StarIcon className="my-auto text-[20px] text-[#FFAD33]" />
                                <label className='text-lg font-bold my-auto'>2</label>
                            </div>

                            <div className='flex flex-grow my-auto'>
                                <Progress className='text-sm' value={0} />
                            </div>

                            <div>
                                <label className='text-lg my-auto'>25</label>
                            </div>

                        </div>

                        <div className='w-full flex gap-3'>

                            <div className='flex gap-1 my-auto'>
                                <StarIcon className="my-auto text-[20px] text-[#FFAD33]" />
                                <label className='text-lg font-bold my-auto'>1</label>
                            </div>

                            <div className='flex flex-grow my-auto'>
                                <Progress className='text-sm' value={0} />
                            </div>

                            <div>
                                <label className='text-lg my-auto'>25</label>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}