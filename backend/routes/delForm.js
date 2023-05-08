import express from "express";
import { authenticate } from "../Middleware/Auth.js";
import { delForm } from "../controllers/delForm.js";
const router = express.Router();

router.post("/", authenticate(), delForm);

export default router;
