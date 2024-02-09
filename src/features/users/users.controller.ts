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
    res.json(await usersService.getOne(req.params.id));
  } catch (err) {
    console.error(`Error while getting user`, err.message);
    next(err);
  }
}

async function updateOne(req: Request, res: Response, next: NextFunction) {
  const { name, bio, location, website } = req.body;

  try {
    res.json(
      await usersService.updateOne(req.params.id, {
        name,
        bio,
        location,
        website,
      })
    );
  } catch (err) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
}

async function followOne(req: Request, res: Response, next: NextFunction) {
  const { userId } = res.locals;

  try {
    res.json(await usersService.followOne(userId, req.params.id));
  } catch (err) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
}

async function unFollowOne(req: Request, res: Response, next: NextFunction) {
  const { userId } = res.locals;

  try {
    res.json(await usersService.unFollowOne(userId, req.params.id));
  } catch (err) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
}

async function friendSuggestions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { userId } = res.locals;
    const limit = parseInt(req.query.limit as string);
    res.json(await usersService.getFriendSuggestions({ userId, limit }));
  } catch (err) {
    console.error(`Error while getting users`, err.message);
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

async function register(req: Request, res: Response, next: NextFunction) {
  const { name, username, email, password } = req.body;

  try {
    const result = await usersService.register({
      name,
      username,
      email,
      password,
    });
    res.json(result);
  } catch (err) {
    console.error(`Error while registering user`, err.message);
    next(err);
  }
}

async function login(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;

  try {
    const result = await usersService.login({ username, password });

    if (result.error) {
      res.status(401).json({ message: result.error });
    } else {
      res.json(result);
    }
  } catch (err) {
    console.error(`Error while authenticating user`, err);
    next(err);
  }
}
async function validateToken(req: Request, res: Response, next: NextFunction) {
  const { userId } = res.locals;
  try {
    const result = await usersService.getOneById(userId);
    res.json(result);
  } catch (err) {
    console.error(`Error while authenticating user`, err);
    next(err);
  }
}

export default {
  getAll,
  getOne,
  updateOne,
  friendSuggestions,
  followOne,
  unFollowOne,
  removeOne,
  register,
  login,
  validateToken,
};
