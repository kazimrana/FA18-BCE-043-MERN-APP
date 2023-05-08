import express from "express";
import { GetUserController } from "../controllers/Logincontroller.js";
import { PostUserController } from "../controllers/Logincontroller.js";

const loginrouter = express.Router();

loginrouter.post("/First", PostUserController);

loginrouter.post(
  "/Second",
  GetUserController
);

export default loginrouter;