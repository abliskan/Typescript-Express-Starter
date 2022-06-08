'use strict';
const dotenv = require('dotenv');
const assert = require('assert');
const { auth, messaging } = require('firebase-admin');

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env;

assert(PORT, 'PORT IS requireed');
assert(HOST, 'HOST IS requireed');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseconfig {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
    }
}