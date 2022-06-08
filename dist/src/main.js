"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = exports.api = void 0;
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const app_module_1 = require("./app.module");
const express = require("express");
const functions = require("firebase-functions");
const expressServer = express();
const createFunction = async (expressInstance) => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressInstance));
    await app.init();
};
exports.api = functions.region('us-central1')
    .https.onRequest(async (request, response) => {
    await createFunction(expressServer);
    expressServer(request, response);
});
exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});
//# sourceMappingURL=main.js.map