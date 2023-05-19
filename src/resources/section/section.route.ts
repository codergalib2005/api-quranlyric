import express from "express";
import {
  updateASection,
  createSection,
  getSections,
  getASection,
  deleteASection,
} from "./section.controller";
const router = express.Router();

// with default route /api/v1/section
router.route("/").get(getSections).post(createSection);

// with ID=>(id) params
router
  .route("/:id")
  .get(getASection)
  .patch(updateASection)
  .delete(deleteASection);

export default router;
