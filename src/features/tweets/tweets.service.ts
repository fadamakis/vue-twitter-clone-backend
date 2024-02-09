import Tweet from "./tweet.model";
import notificationsService from "../notifications/notifications.service";
import { NotificationTypes } from "../notifications/notification.model";

async function getFeed() {
  return await Tweet.find({}).populate("owner");
}

async function search(term) {
  return await Tweet.find({ $text: { $search: term } }).populate("owner");
}

async function getTrends(limit) {
  return await Tweet.aggregate([
    { $unwind: "$hashtags" },
    { $group: { _id: "$hashtags", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: limit || 10 },
    {
      $group: {
        _id: null,
        trends: { $push: { hashtag: "$_id", count: "$count" } },
      },
    },
    { $project: { _id: 0, trends: 1 } },
  ]).then((results) => results[0]);
}

async function getOne(id) {
  return Tweet.findOne({ _id: id }).populate("owner");
}

async function createOne(text) {
  return new Tweet({ text }).save();
}

async function removeOne(id) {
  return Tweet.findByIdAndDelete(id);
}

async function likeOne({ tweetId, userId }) {
  const tweet = await Tweet.findByIdAndUpdate(tweetId, {
    $addToSet: { likes: userId },
  });

  await notificationsService.createOne({
    type: NotificationTypes.Like,
    sender: userId,
    receiver: tweet.owner,
    tweetId: tweet._id,
  });

  return { success: true };
}

async function unLikeOne({ tweetId, userId }) {
  await Tweet.findByIdAndUpdate(tweetId, {
    $pull: { likes: userId },
  });

  return { success: true };
}

export default {
  search,
  getTrends,
  getOne,
  createOne,
  likeOne,
  unLikeOne,
  removeOne,
  getFeed,
};
