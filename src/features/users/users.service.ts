import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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

async function getOneById(_id) {
  return User.findById({ _id });
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

function generateToken(userId) {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "5d",
  });
}

async function register(data) {
  const newUser = await new User(data).save();
  const token = generateToken(newUser._id);

  return {
    username: newUser.username,
    token,
  };
}

async function login(data) {
  const { username, password } = data;

  const user = await User.findOne({ username }).select("+password");
  if (!user) {
    return { error: "User not found" };
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return { error: "Invalid password" };
  }

  const token = generateToken(user._id);

  let userObject = user.toObject();
  delete userObject.password;

  return {
    token,
    user: userObject,
  };
}

export default {
  getAll,
  getOne,
  getOneById,
  updateOne,
  getFriendSuggestions,
  followOne,
  removeOne,
  register,
  login,
};
