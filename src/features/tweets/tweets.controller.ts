import * as tweetsService from "./tweets.service";
import { Request, Response, NextFunction } from "express";

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await tweetsService.get(req.params.id));
  } catch (err) {
    console.error(`Error while getting tweet`, err.message);
    next(err);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await tweetsService.create(req.body.text));
  } catch (err) {
    console.error(`Error while creating feed`, err.message);
    next(err);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await tweetsService.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating tweet`, err.message);
    next(err);
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await tweetsService.remove(req.params.id));
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

export { get, create, update, remove, getFeed };
