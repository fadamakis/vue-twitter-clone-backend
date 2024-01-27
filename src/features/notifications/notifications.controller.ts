import { Request, Response, NextFunction } from "express";
import notificationsService from "./notifications.service";

async function getAll(_: Request, res: Response, next: NextFunction) {
  try {
    res.json(await notificationsService.getAll());
  } catch (err) {
    console.error(`Error while getting notifications`, err.message);
    next(err);
  }
}

async function createOne(req: Request, res: Response, next: NextFunction) {
  // TODO: sender, receiver, type
  try {
    res.json(await notificationsService.createOne());
  } catch (err) {
    console.error(`Error while creating notification`, err.message);
    next(err);
  }
}

export default { getAll, createOne };
