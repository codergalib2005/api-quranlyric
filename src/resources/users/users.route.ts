import authMiddleware from "../../middlewares/authMiddleware";
import { register, login, validation, updateUser } from "./users.controller";
import express from "express";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
// Protected route that requires authentication
router.get("/protected-route", authMiddleware, validation);
router.patch("/update-user", authMiddleware, updateUser);

export default router;
