import { Request, Response, NextFunction } from "express";
import notificationsService from "./notifications.service";

async function getAll(_: Request, res: Response, next: NextFunction) {
  try {
    const { userId } = res.locals;
    res.json(await notificationsService.getAll(userId));
  } catch (err) {
    console.error(`Error while getting notifications`, err.message);
    next(err);
  }
}

export default { getAll };
