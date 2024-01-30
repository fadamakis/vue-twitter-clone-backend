import express from "express";
import usersController from "./users.controller";

const router = express.Router();

router.get("/", usersController.getAll);

router.get("/friend-suggestions", usersController.friendSuggestions);

router.get("/:id", usersController.getOne);

router.post("/", usersController.createOne);

router.put("/:id", usersController.updateOne);

router.put("/follow/:id", usersController.followOne);

router.delete("/:id", usersController.removeOne);

export default router;
