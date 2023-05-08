import express from "express";
import { show, createForm} from "../controllers/addForm.js";
import { authenticate } from "../Middleware/Auth.js";
const router = express.Router();

router.get("/", show);

router.post("/",authenticate(), createForm);


export default router;
