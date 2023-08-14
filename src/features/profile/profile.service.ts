import Profile from "./profile.model";

async function get(id) {
  return Profile.find({ _id: id });
}

async function create(data) {
  return new Profile(data).save();
}

async function update(id, data) {
  return Profile.findByIdAndDelete(id, data);
}

async function remove(id) {
  return Profile.findByIdAndDelete(id);
}

export { get, create, update, remove };
