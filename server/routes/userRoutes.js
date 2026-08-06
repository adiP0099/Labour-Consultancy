import express from "express";
import { updateLocation } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Update User Location
router.put("/location", protect, updateLocation);

export default router;