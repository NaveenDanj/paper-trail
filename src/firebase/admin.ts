// src/firebase/admin.ts
import admin from 'firebase-admin';
var serviceAccount = require("../paper-trail.json");


if (admin.apps == null){
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

export default admin