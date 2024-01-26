import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  avatar:{
    type: String,
  },
  banner:{
    type: String,
  },
  bio:{
    type: String,
  },
  location:{
    type: String,
  },
  website:{
    type: String,
  },
});

export default mongoose.model("User", UserSchema);