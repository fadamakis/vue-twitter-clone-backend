import * as profileService from "./profile.service";
import { Request, Response, NextFunction } from "express";

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await profileService.get(req.params.id));
  } catch (err) {
    console.error(`Error while getting profile`, err.message);
    next(err);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await profileService.create(req.body));
  } catch (err) {
    console.error(`Error while creating profile`, err.message);
    next(err);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await profileService.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating profile`, err.message);
    next(err);
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await profileService.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting profile`, err.message);
    next(err);
  }
}

export { get, create, update, remove };
