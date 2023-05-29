"use strict";
// title: string;
// content: string;
// category: string;
// tags: string[];
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDoc = exports.updateDoc = exports.getADoc = exports.getDocs = exports.createDoc = void 0;
const slug_1 = __importDefault(require("../../utils/slug"));
const document_model_1 = __importDefault(require("./document.model"));
const createDoc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, category, topic } = req.body;
        const count = yield document_model_1.default.countDocuments();
        const makeSlug = `${count + 1}-${(0, slug_1.default)(title)}`;
        const newDoc = new document_model_1.default({
            title,
            content,
            category,
            topic,
            slug: makeSlug,
        });
        const saveDoc = yield newDoc.save();
        res.status(201).json({ message: "Document Added success", data: saveDoc });
    }
    catch (err) {
        res.status(500).json({ error: "Document didn't add", err });
    }
});
exports.createDoc = createDoc;
const getDocs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docs = yield document_model_1.default.find();
        res.status(200).json({ message: "docs loaded", data: docs });
    }
    catch (err) {
        res.status(500).json({ message: "That was server error" });
    }
});
exports.getDocs = getDocs;
const getADoc = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getADoc = getADoc;
const updateDoc = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.updateDoc = updateDoc;
const deleteDoc = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.deleteDoc = deleteDoc;
//# sourceMappingURL=document.controller.js.map