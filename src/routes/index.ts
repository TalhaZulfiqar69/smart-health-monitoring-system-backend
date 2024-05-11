import express, { Request, Response } from "express";
import authRoutes from "./auth.routes";

const router = express.Router();

/* GET default server response. */
router.get("/", function (req, res) {
  res.status(200).json({
    status: 200,
    success: true,
    message: "Welcome to Backend APIs",
    data: {},
  });
});

router.use("/auth", authRoutes); // Auth routes

export default router;
