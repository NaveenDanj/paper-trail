import Footer from "@/components/home/Footer";
import { useParams } from 'next/navigation'
import ProductWrapper from "@/components/product/ProductWrapper";


export default function ProductPage() {
    const params = useParams<{ id: string; }>()

    return (
        <div className="w-full flex flex-col">

            <div className="flex flex-col px-3 lg:px-24 mt-10 pb-10 ">
                <ProductWrapper id={params.id} />
            </div>
            <Footer />

        </div>
    )

}