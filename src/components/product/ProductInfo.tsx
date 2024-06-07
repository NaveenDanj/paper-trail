import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function ProductInfo() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>Product Details</AccordionTrigger>
                <AccordionContent>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet eius numquam magnam nostrum magni delectus nihil, quo esse laborum ipsa quasi debitis? Officia sed ratione facilis quasi explicabo odio cumque.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Size & dimentions</AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quae quisquam et amet? Facilis amet autem consequatur enim ratione nostrum sit
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Reviews</AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti recusandae ullam eum delectus porro ab perspiciatis excepturi, inventore fugiat consectetur omnis ad soluta rerum optio.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}