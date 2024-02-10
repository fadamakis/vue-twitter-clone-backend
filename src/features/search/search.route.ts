import express from "express";
import searchController from "./search.controller";

const router = express.Router();

router.post("/", searchController.search);

export default router;
