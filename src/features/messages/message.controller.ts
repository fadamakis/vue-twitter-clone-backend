import * as messageService from "./message.service";
import { Request, Response, NextFunction } from "express";

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await messageService.get(req.params.id));
  } catch (err) {
    console.error(`Error while getting message`, err.message);
    next(err);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await messageService.create(req.body));
  } catch (err) {
    console.error(`Error while creating message`, err.message);
    next(err);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await messageService.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating message`, err.message);
    next(err);
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await messageService.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting message`, err.message);
    next(err);
  }
}

export { get, create, update, remove };
