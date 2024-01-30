import usersService from "./users.service";
import { Request, Response, NextFunction } from "express";

async function getAll(_: Request, res: Response, next: NextFunction) {
  try {
    res.json(await usersService.getAll());
  } catch (err) {
    console.error(`Error while getting users`, err.message);
    next(err);
  }
}

async function getOne(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await usersService.getOne(req.params.id.substring(1)));
  } catch (err) {
    console.error(`Error while getting user`, err.message);
    next(err);
  }
}

async function createOne(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await usersService.createOne(req.body));
  } catch (err) {
    console.error(`Error while creating user`, err.message);
    next(err);
  }
}

async function updateOne(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await usersService.updateOne(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
}

async function followOne(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await usersService.followOne(req.params.id));
  } catch (err) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
}


async function removeOne(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await usersService.removeOne(req.params.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
}

export default { getAll, getOne, createOne, updateOne, followOne, removeOne };
