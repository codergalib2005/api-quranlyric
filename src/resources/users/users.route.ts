import { register, login, googleLogin } from "./users.controller";
import express from "express";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/google-login", googleLogin);

export default router;
