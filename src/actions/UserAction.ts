'use server'

import admin from "@/firebase/admin"
import { User } from "@/types/types"


export const handleUserSave = async (userData:string) => {
    
    const data:User = JSON.parse(userData)

    const q = admin.firestore().collection('user').where('email' , '==' , data.email)
    const results = await q.get()
    
    if(results.docs.length > 0){
        return {
            success : false,
            message : 'Already has a user account for this email.'
        }
    }
        
    await admin.app().firestore().collection('user').doc(data.uid).set(data)

    return {
        success : true,
        message: 'User account created successfully.'
    }

}



export const handleSaveUserOrderInfo = async (user:User) => {

    const q = admin.firestore().collection('user').where('email' , '==' , user.email)
    const results = await q.get()


    if(results.docs.length == 0){
        return {
            success : false,
            message : 'User account does not exists!'
        }
    }

    await admin.firestore().collection('user').doc(user.uid).update(user)

    return {
        success : true,
        message: 'User account updated successfully.'
    }

}