import express from "express";
import { getAllSurah, createSurah } from "./surah.controller";

const router = express.Router();

router.get("/", getAllSurah);
router.post("/", createSurah);

export default router;
