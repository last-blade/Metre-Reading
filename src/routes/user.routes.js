import { Router } from "express";
import { registerUser } from "../controllers/userControllers/registerUser.controller.js";
import { loginUser } from "../controllers/userControllers/loginUser.controller.js";
import { logoutUser } from "../controllers/userControllers/logoutUser.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

//POST
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(authMiddleware, logoutUser);

export default router;