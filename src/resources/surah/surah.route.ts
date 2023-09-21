import express from "express";
import { getAllSurah } from "./surah.controller";

const router = express.Router();

router.get("/", getAllSurah);

export default router;
