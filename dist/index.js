"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const getAllUsers_1 = __importDefault(require("./routes/getAllUsers"));
const app = (0, express_1.default)();
const server = new http_1.default.Server(app);
server.listen(3002);
app.get('/users/all', getAllUsers_1.default);
//# sourceMappingURL=index.js.map