import CartWrapper from "@/components/cart/CartWrapper";
import Footer from "@/components/home/Footer";

export default function Cart() {


    return (
        <div className="w-full flex flex-col">

            <div className="flex flex-col px-3 lg:px-24 mt-10 pb-10 ">
                <CartWrapper />
            </div>

            <Footer />

        </div>
    )
}