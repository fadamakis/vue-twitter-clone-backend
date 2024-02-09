import express from "express";
import tweetsController from "./tweets.controller";

const router = express.Router();

router.get("/search/:term", tweetsController.search);

router.get("/trends", tweetsController.trends);

router.get("/", tweetsController.getFeed);

router.get("/:id", tweetsController.getOne);

router.post("/", tweetsController.createOne);

router.put("/like/:id", tweetsController.likeOne);

router.put("/unlike/:id", tweetsController.unLikeOne);

router.delete("/:id", tweetsController.remove);

export default router;
