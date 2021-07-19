const express = require("express");
const router = express.Router();
const colors = require("colors");

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("Home".cyan);
  res.render("index", { title: "Jason Starkey", style: "index" });
});

/* GET about me */
router.get("/about", function (req, res, next) {
  console.log("About".cyan);
  res.render("about", { title: "JS|About", style: "about" });
});

/* GET projects */
router.get("/projects", function (req, res, next) {
  console.log("Projects".cyan);
  res.render("projects", { title: "JS|Projects", style: "projects" });
});
/* GET blog */
/* GET contact */
router.get("/contact", function (req, res, next) {
  console.log("Contact".cyan);
  res.render("contact", { title: "JS|Contact", style: "contact" });
});

module.exports = router;
