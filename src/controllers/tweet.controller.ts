import * as tweetService from "../services/tweet.service";

async function get(req, res, next) {
  try {
    res.json(await tweetService.get(req.params.id));
  } catch (err) {
    console.error(`Error while getting tweet`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await tweetService.create(req.body));
  } catch (err) {
    console.error(`Error while creating feed`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await tweetService.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating tweet`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await tweetService.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting tweet`, err.message);
    next(err);
  }
}

async function getFeed(_, res, next) {
  try {
    res.json(await tweetService.getFeed());
  } catch (err) {
    console.error(`Error while getting tweet`, err.message);
    next(err);
  }
}

export { get, create, update, remove, getFeed };
