"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectDB_1 = __importDefault(require("./connect/connectDB"));
const app = (0, express_1.default)();
//
const section_route_1 = __importDefault(require("./resources/section/section.route"));
const document_route_1 = __importDefault(require("./resources/document/document.route"));
// middlewares
(0, connectDB_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// main page
app.get("/", (req, res) => {
    res.status(200).send("Hello, World!");
});
// use routes
app.use("/api/v1/sections", section_route_1.default);
app.use("/api/v1/doc", document_route_1.default);
exports.default = app;
//# sourceMappingURL=server.js.map