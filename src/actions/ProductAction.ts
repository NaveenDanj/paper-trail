'use server'

import admin from "@/firebase/admin"
import { Product } from "@/types/types";

export async function GetFlashSales (){
    // get the first 10 lowest quantity item 
    const products = (await admin.firestore().collection('products').where('stock' , '<=', 100).limit(20).get())
    return products.docs.map(product => (product.data() as Product));
}

export async function GetBestSellingProducts(p0: number){
    const products = (await admin.firestore().collection('products').orderBy('salesCount' , 'desc').limit(20).get())
    return products.docs.map(product => (product.data() as Product));
}


export async function GetRandomProductList(){
    const products = (await admin.firestore().collection('products').limit(30).get())
    return products.docs.map(product => (product.data() as Product));
}


export async function GetRelatedProducts(){
    const products = (await admin.firestore().collection('products').limit(10).get())
    return products.docs.map(product => (product.data() as Product));
}

export async function GetProducts(limit:number){
    const products = (await admin.firestore().collection('products').limit(limit).get())
    return products.docs.map(product => (product.data() as Product));
}

export async function GetProductInfo(id:string){
    return (await admin.firestore().collection('products').doc(id).get()).data() as Product
}