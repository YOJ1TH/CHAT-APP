import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// Add a debugging console log to check if the route is hit

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
