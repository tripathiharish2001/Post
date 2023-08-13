// for apis
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.post("/", async (req, res) => {
  // always make try catch box for error detection if any
  try {
    let { name, text, image } = req.body;
    // now we have to create a new data, using Post what we created before
    let post = new Post({ name, text, image });

    await post.save();
    // always use awaits in db oprn as time taking oprn
    res.json({ msg: "Post created successfully!" });
  } catch (error) {
    console.log(error);
    res.json({ msg: "Something went wrong!" });
  }
});

// to update a post -> use put , as good practice, you can use post too
// postId waale post ko update krna hai
router.put("/:postId", async (req, res) => {
  try {
    let { name, text, image } = req.body;
    let postObj = {};
    postObj.name = name;
    postObj.text = text;
    postObj.image = image;

    // now dabase operation, we use awaits
    //mongodb query
    await Post.findOneAndUpdate(
      { _id: req.params.postId }, //isko dhundho
      { $set: postObj }, // ismei update kro
      { new: true } //compulsary to add for add
    );

    res.json({ msg: "Post updated successfully!" });
  } catch (error) {
    console.log(error);
    res.json({ msg: "Something went wrong!" });
  }
});

// now we have posted and updated, now we have to see on a page
router.get("/", async (req, res) => {
  try {
    let posts = await Post.find(); // select from POST
    res.json({ posts: posts });
  } catch (error) {
    console.log(error);
    res.json({ msg: "Something went wrong!" });
  }
});

// now for a single post
router.get("/:postId", async (req, res) => {
  try {
    let post = await Post.findById(req.params.postId);

    // now dabase operation, we use awaits
    //mongodb query

    res.json({ post: post });
  } catch (error) {
    console.log(error);
    res.json({ msg: "Something went wrong!" });
  }
});

// to delete a post
router.delete("/:postId", async (req, res) => {
  try {
    let post = await Post.findByIdAndRemove(req.params.postId);

    // now dabase operation, we use awaits
    //mongodb query

    res.json({ msg: "Deleted post sucessfullly! " });
  } catch (error) {
    console.log(error);
    res.json({ msg: "Something went wrong!" });
  }
});

module.exports = router;
