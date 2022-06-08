"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
// initializing this “firebase-functions”
const functions = require("firebase-functions");
/* Start writing Firebase Functions
https://firebase.google.com/docs/functions/typescript

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

export const helloWorld = functions.https.onRequest((request, response) => {
functions.logger.info("Hello logs!", {structuredData: true});
response.send("Hello from Firebase!");
});

// onCreate() has event object as function argument
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
functions.auth.user().onCreate(event => {
    // event.data returns user object which contains User’s UID, Email, Display Name, PhotoUrl, etc
    const user = event.data;
    // userObject is new object created using information available from user
    var userObject = {
        displayName : user.displayName,
        email : user.email,
        photoUrl : user.photoURL,
        createdOn : user.metadata.createdAt
    };
    //  this userObject object inside “Users” object in Firebase Database
    admin.database().ref('users/' + user.uid).set(userObject);
});
*/
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();
// helloWord (GET)
exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});