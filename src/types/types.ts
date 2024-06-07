export type User = {
    uid:string;
    fullName: string;
    email:string;
    phone:string;
    dp:string;
    companyName:string;
    streetAddress:string;
    apartment:string;
    city:string;
    zip:string;
}


export type Product = {
    uid:string;
    name:string;
    description:string;
    price:number;
    category:string;
    stock:number;
    images: string[];
    available:boolean;
    discount?:{
        value:number;
        expireDate: Date;
    };
    brand:string;
    tags: string[];
    salesCount: number;
    sku:string;
    dimensions?:string;
    weight?:number;
    features?:string;
    isFeatured:boolean;
    isInBanner:boolean;
}