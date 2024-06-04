import admin from 'firebase-admin';
var serviceAccount = require("../paper-trail.json");

function formatPrivateKey(key:string){
    return key.replace(/\\n/g, "\n")
}


if (admin.apps.length == 0){

    const privateKey = formatPrivateKey(process.env.FIREBASE_PRIVATE_KEY as string)

    admin.initializeApp({
        credential: admin.credential.cert({
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey,
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
        }),
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
    });

}

export default admin