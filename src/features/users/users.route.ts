import express from "express";
import usersController from "./users.controller";

const router = express.Router();

router.get("/", usersController.getAll);

router.get("/friend-suggestions", usersController.friendSuggestions);

router.post("/register", usersController.register);

router.post("/login", usersController.login);

router.get("/me", usersController.validateToken);

router.get("/:id", usersController.getOne);

router.put("/:id", usersController.updateOne);

router.put("/follow/:id", usersController.followOne);

router.put("/unfollow/:id", usersController.unFollowOne);

router.delete("/:id", usersController.removeOne);

export default router;
