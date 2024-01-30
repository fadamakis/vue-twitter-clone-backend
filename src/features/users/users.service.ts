import User from "./user.model";

async function getAll() {
  return User.find();
}

async function getOne(username) {
  return User.aggregate([
    {
      $match: {
        username,
      },
    },
    {
      $lookup: {
        from: "tweets",
        localField: "_id",
        foreignField: "owner",
        as: "tweets",
      },
    },
    {
      $limit: 1,
    },
  ]).then((results) => results[0]);
}

async function createOne(data) {
  return new User(data).save();
}

async function updateOne(id, data) {
  return User.findByIdAndDelete(id, data);
}

async function getFriendSuggestions(limit = 5) {
  // TODO exclude myself and already following
  return User.find().limit(limit);
}

async function followOne(id) {
  // TODO
}

async function removeOne(id) {
  return User.findByIdAndDelete(id);
}

export default {
  getAll,
  getOne,
  createOne,
  updateOne,
  getFriendSuggestions,
  followOne,
  removeOne,
};
