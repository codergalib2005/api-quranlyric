import express from "express";
import {
  updateDoc,
  getADoc,
  getDocs,
  createDoc,
  deleteDoc,
} from "./document.controller";
const router = express.Router();

router.route("/").get(getDocs).post(createDoc);
router.route("/:id").get(getADoc).patch(updateDoc).delete(deleteDoc);

export default router;
