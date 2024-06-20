import Footer from "@/components/home/Footer";

export default function ReturnPolicyPage() {
    return (
        <div className="w-full flex flex-col">

            <div className="flex flex-col px-3 lg:px-24 mt-10 pb-10 ">

                <h1 className="text-3xl font-bold text-gray-800 mb-6">Return Policy</h1>

                <p className="text-gray-700 mb-4">At The Paper Trail, we strive to ensure you are completely satisfied with your purchase. If for any reason you are not satisfied, our return policy provides guidelines on how you can return items to us.</p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Return Eligibility</h2>

                <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">Timeframe</h3>
                <p className="text-gray-700 mb-4">Items must be returned within 30 days of the delivery date.</p>

                <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">Condition</h3>
                <p className="text-gray-700 mb-4">Items must be unused, in their original condition, and in the original packaging.</p>

                <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">Non-Returnable Items</h3>
                <p className="text-gray-700 mb-4">Custom or personalized orders, sale items, and gift cards cannot be returned.</p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Return Process</h2>
                <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                    <li><span className="font-semibold">Request a Return</span>: Contact our customer service team at <a href="mailto:[Customer Service Email]" className="text-blue-500 underline">[Customer Service Email]</a> with your order number, item(s) to be returned, and the reason for the return.</li>
                    <li><span className="font-semibold">Return Authorization</span>: Once your return request is approved, you will receive a return authorization and instructions on how to return the item(s).</li>
                    <li><span className="font-semibold">Shipping</span>: You are responsible for the shipping costs of returning the item(s). We recommend using a trackable shipping method to ensure the item reaches us safely.</li>
                    <li><span className="font-semibold">Inspection and Approval</span>: Once we receive your return, we will inspect the item(s) and notify you of the approval or rejection of your return.</li>
                </ol>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Refunds</h2>

                <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">Refund Eligibility</h3>
                <p className="text-gray-700 mb-4">Approved returns will be processed for a refund to the original method of payment.</p>

                <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">Refund Process</h3>
                <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                    <li><span className="font-semibold">Approval Notification</span>: Once your return is approved, we will notify you via email.</li>
                    <li><span className="font-semibold">Processing Time</span>: Refunds will be processed within 7-10 business days from the approval date.</li>
                </ol>

                <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">Partial Refunds</h3>
                <p className="text-gray-700 mb-4">Partial refunds may be granted for items not in their original condition, damaged, or missing parts for reasons not due to our error.</p>

                <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">Late or Missing Refunds</h3>
                <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                    <li><span className="font-semibold">Check Your Account</span>: First, check your bank account again.</li>
                    <li><span className="font-semibold">Contact Your Bank</span>: Processing times can vary, so please contact your bank.</li>
                    <li><span className="font-semibold">Contact Us</span>: If you still have not received your refund, please contact us at <a href="mailto:[Customer Service Email]" className="text-blue-500 underline">[Customer Service Email]</a>.</li>
                </ol>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Exchanges</h2>
                <p className="text-gray-700 mb-4">We only replace items if they are defective or damaged. If you need to exchange an item for the same product, please contact us at <a href="mailto:[Customer Service Email]" className="text-blue-500 underline">[Customer Service Email]</a>.</p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-4">For any questions or concerns regarding returns, please contact our customer service team:</p>
                <div className="contact-info text-gray-700">
                    <p><span className="font-semibold">Email:</span> <a href="mailto:[Customer Service Email]" className="text-blue-500 underline">[Customer Service Email]</a></p>
                    <p><span className="font-semibold">Phone:</span> [Customer Service Phone Number]</p>
                    <p><span className="font-semibold">Address:</span> No 21/1, Jayanthi Vidyala Mawatha, Nampamunuwa, Piliyandala</p>
                </div>


            </div>

            <Footer />

        </div>
    )
}