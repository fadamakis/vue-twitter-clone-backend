import Tweet from "./tweet.model";

async function getFeed() {
  return await Tweet.find({}).populate("owner");
}

async function search(term) {
  return await Tweet.find({ $text: { $search: term } }).populate("owner");
}

async function getTrends() {
  return await Tweet.aggregate([
    { $unwind: "$hashtags" },
    { $group: { _id: "$hashtags", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 6 },
    {
      $group: {
        _id: null,
        trends: { $push: { hashtag: "$_id", count: "$count" } },
      },
    },
    { $project: { _id: 0, trends: 1 } },
  ]).then(results => results[0]);
}

async function getOne(id) {
  return Tweet.findOne({ _id: id }).populate("owner");
}

async function createOne(text) {
  return new Tweet({ text }).save();
}

async function updateOne(id, text) {
  return Tweet.findByIdAndDelete(id, { text });
}

async function removeOne(id) {
  return Tweet.findByIdAndDelete(id);
}

export default {
  search,
  getTrends,
  getOne,
  createOne,
  updateOne,
  removeOne,
  getFeed,
};
