import Notification from "./notification.model";

async function getAll(userId) {
  return await Notification.find({ receiver: userId }).populate(["sender"]);
}

async function createOne({ type, sender, receiver, tweetId = null }) {
  return new Notification({
    type,
    sender,
    receiver,
    tweetId,
  }).save();
}

export default {
  getAll,
  createOne,
};
