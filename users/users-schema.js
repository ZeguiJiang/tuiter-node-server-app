import mongoose from "mongoose";
const usersSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, default: "FIRSTNAME" },
  // lastName: String,
  lastName: { type: String, default: "lastName" },
  role: { type: String, default: "USER" },
  following_count: { type: Number, default: 0 },
  followers_count: { type: Number, default: 0 },
  avatar: { type: String, default: "https://i.imgur.com/J23plKz.jpeg" }

}, { collection: "users" });
export default usersSchema;