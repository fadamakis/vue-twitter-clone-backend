import { Request, Response, NextFunction } from "express";
import notificationsService from "./notifications.service";

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const { userId } = req;
    res.json(await notificationsService.getAll(userId));
  } catch (err) {
    console.error(`Error while getting notifications`, err.message);
    next(err);
  }
}

export default { getAll };
