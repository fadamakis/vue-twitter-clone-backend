import Tweet from "../tweets/tweet.model";
import User from "../users/user.model";

async function search(term) {
  const tweets = await Tweet.find({ $text: { $search: term } }).populate(
    "owner"
  );

  const profiles = await User.find({ $text: { $search: term } });

  return { tweets, profiles };
}

export default {
  search,
};
