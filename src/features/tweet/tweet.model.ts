import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Tweet", TweetSchema);