import messageService from "./message.service";
import { Request, Response, NextFunction } from "express";

async function getOne(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await messageService.getOne(req.params.id));
  } catch (err) {
    console.error(`Error while getting message`, err.message);
    next(err);
  }
}

async function createOne(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await messageService.createOne(req.body));
  } catch (err) {
    console.error(`Error while creating message`, err.message);
    next(err);
  }
}

async function updateOne(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await messageService.updateOne(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating message`, err.message);
    next(err);
  }
}

async function removeOne(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await messageService.removeOne(req.params.id));
  } catch (err) {
    console.error(`Error while deleting message`, err.message);
    next(err);
  }
}

export default { getOne, createOne, updateOne, removeOne };
