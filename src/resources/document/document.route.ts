import express from "express";
import {
  updateDoc,
  getADoc,
  getDocs,
  createDoc,
  deleteDoc,
  getBySlug,
} from "./document.controller";
const router = express.Router();

router.route("/").get(getDocs).post(createDoc);
router.route("/:id").get(getADoc).patch(updateDoc).delete(deleteDoc);
router.route("/slug/:slug", getBySlug);
export default router;
