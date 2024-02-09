import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  hashtags: {
    type: Array,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

TweetSchema.index({ body: "text" });

TweetSchema.pre("save", function (next) {
  this.hashtags = this.body.match(/(#[a-z0-9][a-z0-9\-_]*)/gi);
  next();
});

export default mongoose.model("Tweet", TweetSchema);
