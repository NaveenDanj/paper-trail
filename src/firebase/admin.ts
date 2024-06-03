// src/firebase/admin.ts
import admin from 'firebase-admin';
var serviceAccount = require("../paper-trail.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});