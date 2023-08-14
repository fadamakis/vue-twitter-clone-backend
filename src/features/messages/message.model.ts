import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  converstationId: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
  participants: {
    type: Array,
    required: true,
  },
});

export default mongoose.model("message", messageSchema);