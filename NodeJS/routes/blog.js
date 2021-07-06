const express = require("express");
const router = express.Router();
const colors = require("colors");
const mongoose = require("mongoose");

// Schema & Model Setup
const postSchema = new mongoose.Schema({
  title: String,
  date: String,
  content: String,
  category: String,
});

// productSchema.index({ "$**": "text" });
const Post = mongoose.model("Post", postSchema);

/* GET /blog/*/
router.get("/", async function (req, res, next) {
  const posts = await Post.find({});
  res.render("blog", { title: "JS|Blog", style: "blog", posts });
});

/* GET /blog/*/
router.get("/new", function (req, res, next) {
  res.render("new-post", { title: "JS|New-Post", style: "blog" });
});

/* GET about me */
router.get("/post/:id", function (req, res, next) {});

module.exports = router;
