'use server'
import { Product } from '@/types/types';
import admin from '../firebase/admin'
import products from './list2.json'
import { randomUUID } from 'crypto';

export async function InsertProductRecord() {
    
    const list = products.content;

    for(let i = 0; i < list.length; i++){
        console.log(list[i].title.seoTitle)
        

        const uid = randomUUID()

        const product:Product = {
            uid,
            name: list[i].title.displayTitle,
            description: list[i].title.seoTitle,
            price: list[i].prices.salePrice.minPrice,
            category: list[i].productType,
            stock: 100,
            images: list[i].images.map(item => (item.imgUrl)),
            available: true,
            brand: list[i].store.storeName,
            tags: [],
            salesCount: 3,
            sku: list[i].prices.skuId,
            isFeatured: false,
            isInBanner: false,
            isDropshippingItem: true,
            dropshippingItemDetails: {
                itemURL : 'https://www.aliexpress.com/item/'+ list[i].productId +'.html',
                productID: list[i].productId
            }
        }

        const ref = admin.firestore().collection('products').where('sku' , '==' , product.sku).limit(1)
        const res = await ref.get();

        if(!res.empty){
            console.log("Already added!")
            continue;
        }

        await admin.firestore().collection('products').doc(uid).create(product)
        
        console.log("========================================")
        console.log("Done")
    }

    console.log("All completed!")    
}

