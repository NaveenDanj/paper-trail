import DescriptionIcon from '@mui/icons-material/Description';

export default function CategoryCard() {
    return (
        <div style={{ border: '1px solid rgba(0,0,0,0.1)' }} className="flex justify-center items-center max-w-[150px] p-10">

            <div className="flex flex-col gap-2 justify-center items-center">
                <DescriptionIcon sx={{ fontSize: 30 }} />
                <center><label className='text-sm'>Paper Products</label></center>
            </div>

        </div>
    )
}