"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const section_controller_1 = require("./section.controller");
const router = express_1.default.Router();
// with default route /api/v1/section
router.route("/").get(section_controller_1.getSections).post(section_controller_1.createSection);
// with ID=>(id) params
router
    .route("/:id")
    .get(section_controller_1.getASection)
    .patch(section_controller_1.updateASection)
    .delete(section_controller_1.deleteASection);
router.put("/addDoc", section_controller_1.newDoc);
exports.default = router;
//# sourceMappingURL=section.route.js.map