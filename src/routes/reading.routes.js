import { Router } from "express";
import { createWaterReadings } from "../controllers/metreReadingControllers/createWaterReadings.controller.js";
import { fetchAllWaterReadings } from "../controllers/metreReadingControllers/fetchAllWaterReadings.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/save").post(authMiddleware, createWaterReadings);
router.route("/readings").get(authMiddleware, fetchAllWaterReadings);

export default router;