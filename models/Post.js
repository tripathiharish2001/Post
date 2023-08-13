// for schema
const mongoose = require("mongoose");

// schema-> class or grouping
const PostSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestams: true }
);

// model ->  onbect or table hai
const Post = mongoose.model("post", PostSchema);
module.exports = Post;

// that post at 14  must be in small
// class adn obj ka diff hai vo scheama and model ka diff ha
