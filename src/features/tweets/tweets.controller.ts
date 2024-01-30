import { log } from "console";
import tweetsService from "./tweets.service";
import { Request, Response, NextFunction } from "express";

async function search(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await tweetsService.search(req.params.term));
  } catch (err) {
    console.error(`Error while getting tweets`, err.message);
    next(err);
  }
}

async function trends(req: Request, res: Response, next: NextFunction) {
  try {
    const limit = parseInt(req.query.limit as string);
    res.json(await tweetsService.getTrends(limit));
  } catch (err) {
    console.error(`Error while getting trends`, err.message);
    next(err);
  }
}

async function getOne(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await tweetsService.getOne(req.params.id));
  } catch (err) {
    console.error(`Error while getting tweet`, err.message);
    next(err);
  }
}

async function createOne(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await tweetsService.createOne(req.body.text));
  } catch (err) {
    console.error(`Error while creating feed`, err.message);
    next(err);
  }
}

async function updateOne(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await tweetsService.updateOne(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating tweet`, err.message);
    next(err);
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await tweetsService.removeOne(req.params.id));
  } catch (err) {
    console.error(`Error while deleting tweet`, err.message);
    next(err);
  }
}

async function getFeed(_: Request, res: Response, next: NextFunction) {
  try {
    res.json(await tweetsService.getFeed());
  } catch (err) {
    console.error(`Error while getting tweet`, err.message);
    next(err);
  }
}

export default {
  search,
  trends,
  getOne,
  createOne,
  updateOne,
  remove,
  getFeed,
};
