import message from "./message.model";

async function getOne(id) {
  return message.find({ _id: id });
}

async function createOne(data) {
  return new message(data).save();
}

async function updateOne(id, data) {
  return message.findByIdAndDelete(id, data);
}

async function removeOne(id) {
  return message.findByIdAndDelete(id);
}

export default { getOne, createOne, updateOne, removeOne };
