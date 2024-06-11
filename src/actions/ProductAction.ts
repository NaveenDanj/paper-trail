'use server'

import admin from "@/firebase/admin"
import { Product } from "@/types/types";
import { randomInt } from "crypto";

export async function GetFlashSales (){
    // get the first 10 lowest quantity item 
    const products = (await admin.firestore().collection('products').where('stock' , '<=', 100).limit(20).get())
    return products.docs.map(product => (product.data() as Product));
}

export async function GetBestSellingProducts(){
    const products = (await admin.firestore().collection('products').orderBy('salesCount' , 'desc').limit(20).get())
    return products.docs.map(product => (product.data() as Product));
}


export async function GetRandomProductList(){
    const products = (await admin.firestore().collection('products').limit(30).get())
    return products.docs.map(product => (product.data() as Product));
}