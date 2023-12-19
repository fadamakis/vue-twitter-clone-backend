import User from "./user.model";

async function get(id) {
  return User.find({ _id: id });
}

async function create(data) {
  return new User(data).save();
}

async function update(id, data) {
  return User.findByIdAndDelete(id, data);
}

async function remove(id) {
  return User.findByIdAndDelete(id);
}

export { get, create, update, remove };
