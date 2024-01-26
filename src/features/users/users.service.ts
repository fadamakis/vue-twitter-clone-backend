import User from "./user.model";

async function getAll() {
  return User.find();
}

async function getOne(id) {
  return User.find({ _id: id });
}

async function createOne(data) {
  return new User(data).save();
}

async function updateOne(id, data) {
  return User.findByIdAndDelete(id, data);
}

async function removeOne(id) {
  return User.findByIdAndDelete(id);
}

export default { getAll, getOne, createOne, updateOne, removeOne };
