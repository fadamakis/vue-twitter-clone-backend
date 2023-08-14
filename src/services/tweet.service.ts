import mockTweets from "../mocks/tweets.json";

async function getFeed() {
  return mockTweets;
}

async function get(id) {
  return mockTweets.find((tweet) => tweet.id == id);
}

async function create(text) {
  const tweet = {
    id: mockTweets.length + 1,
    text,
    createdAt: new Date(),
  };

  mockTweets.push(tweet);
}

async function update(id, newTweet) {
  const tweet = mockTweets.find((tweet) => tweet.id == id);
  tweet.text = newTweet;
}

async function remove(id) {
  return mockTweets.filter((tweet) => tweet.id == id);
}

export { get, create, update, remove, getFeed };
