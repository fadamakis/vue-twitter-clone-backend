import Tweet from "../models/tweet.model";

async function getFeed() {
  return await Tweet.find({});
}

async function get(id) {
  return Tweet.find({ _id: id });
}

async function create(text) {
  return new Tweet({ text }).save();
}

async function update(id, text) {
  return Tweet.findByIdAndDelete(id, { text });
}

async function remove(id) {
  return Tweet.findByIdAndDelete(id);
}

export { get, create, update, remove, getFeed };
