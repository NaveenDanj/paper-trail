'use server'

import admin from "@/firebase/admin"
import { User } from "@/types/types"

export const handleUserSave = async (userData:string) => {
    const data:User = JSON.parse(userData)

    const q = admin.app().firestore().collection('user').where('email' , '==' , data.email)
    
    if ((await q.get()).docs.length > 0){
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