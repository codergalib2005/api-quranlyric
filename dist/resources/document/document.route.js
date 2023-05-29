"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const document_controller_1 = require("./document.controller");
const router = express_1.default.Router();
router.route("/").get(document_controller_1.getDocs).post(document_controller_1.createDoc);
router.route("/:id").get(document_controller_1.getADoc).patch(document_controller_1.updateDoc).delete(document_controller_1.deleteDoc);
exports.default = router;
//# sourceMappingURL=document.route.js.map