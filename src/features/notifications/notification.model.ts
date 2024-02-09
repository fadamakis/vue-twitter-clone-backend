import mongoose from "mongoose";

export enum NotificationTypes {
  Follow = "FOLLOW",
  Like = "LIKE",
  Repost = "REPOST",
}

const NotificationSchema = new mongoose.Schema(
  {
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
    tweetId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tweet",
      required: function () {
        return this.type !== NotificationTypes.Follow;
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Notification", NotificationSchema);
