import message from "./message.model";

async function get(id) {
  return message.find({ _id: id });
}

async function create(data) {
  return new message(data).save();
}

async function update(id, data) {
  return message.findByIdAndDelete(id, data);
}

async function remove(id) {
  return message.findByIdAndDelete(id);
}

export { get, create, update, remove };
