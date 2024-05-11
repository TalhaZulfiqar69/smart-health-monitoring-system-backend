import express, { Request, Response } from "express";
import AuthController from "../controllers/auth.controller";

const router = express.Router();

// Define routes
router.get("/login", AuthController.login); // Admin Login api

export default router;
