import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile'
  }
});

export default mongoose.model("Tweet", TweetSchema);