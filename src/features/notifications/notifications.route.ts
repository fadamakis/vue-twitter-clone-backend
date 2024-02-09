import express from "express";
import notificationsController from "./notifications.controller";

const router = express.Router();

router.get("/", notificationsController.getAll);

export default router;
