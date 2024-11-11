import express from "express";
import {UserController} from "../controller/user-controller";

export const publicRouter = express.Router();
// Sesuai user.md
publicRouter.post("/api/users", UserController.register);
publicRouter.post("/api/users/login", UserController.login);