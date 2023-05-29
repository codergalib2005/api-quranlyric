"use strict";
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
exports.newDoc = exports.deleteASection = exports.updateASection = exports.getASection = exports.getSections = exports.createSection = void 0;
const slug_1 = __importDefault(require("../../utils/slug"));
const section_model_1 = __importDefault(require("./section.model"));
const createSection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, order, topic } = req.body;
        const count = yield section_model_1.default.countDocuments();
        const makeSlug = `${count + 1}-${(0, slug_1.default)(name)}`;
        const newSection = new section_model_1.default({
            name,
            order,
            topic,
            slug: makeSlug,
        });
        const saveSection = yield newSection.save();
        res.status(201).json({ message: "Section created", data: saveSection });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to create section", err });
    }
});
exports.createSection = createSection;
const getSections = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sections = yield section_model_1.default.find()
            .populate("documents", "title content slug -_id")
            .exec();
        res.status(200).json({ message: "Data loaded", data: sections });
    }
    catch (err) {
        res.status(500).json({ error: "Failed to retrieve sections", err });
    }
});
exports.getSections = getSections;
const getASection = (req, res) => { };
exports.getASection = getASection;
const updateASection = (req, res) => { };
exports.updateASection = updateASection;
const deleteASection = (req, res) => { };
exports.deleteASection = deleteASection;
const newDoc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sectionId, docId } = req.body;
    try {
        const section = yield section_model_1.default.findOne({ _id: sectionId });
        if (!section) {
            return res.status(404).json({ message: "Section not found" });
        }
        section.documents.push(docId);
        const updatedSection = yield section.save();
        res.status(201).json({ message: "Updated section", data: updatedSection });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Server error", err });
    }
});
exports.newDoc = newDoc;
//# sourceMappingURL=section.controller.js.map