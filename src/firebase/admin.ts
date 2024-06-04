// src/firebase/admin.ts
import admin from 'firebase-admin';
// var serviceAccount = require("../paper-trail.json");


// if (admin.apps == null){
//     admin.initializeApp({
//         credential: admin.credential.cert(serviceAccount)
//     });
// }


if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        // @ts-ignore
        type: process.env.FIREBASE_TYPE,
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        // @ts-ignore
        private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        client_id: process.env.FIREBASE_CLIENT_ID,
        auth_uri: process.env.FIREBASE_AUTH_URI,
        token_uri: process.env.FIREBASE_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
      }),
      databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
    });
  }



export default admin