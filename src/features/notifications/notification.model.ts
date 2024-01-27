import mongoose from "mongoose";

export enum NotificationTypes {
  Follow = "FOLLOW",
  Like = "LIKE",
  Retweet = "RETWEET",
}

const NotificationSchema = new mongoose.Schema({
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  type: {
    type: String,
    enum: NotificationTypes,
    required: true,
  },
  tweet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tweet",
  },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Notification", NotificationSchema);
