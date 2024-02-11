import searchService from "./search.service";
import { Request, Response, NextFunction } from "express";

async function search(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await searchService.search(req.body.term));
  } catch (err) {
    console.error(`Error while getting search results`, err.message);
    next(err);
  }
}

export default {
  search,
};
