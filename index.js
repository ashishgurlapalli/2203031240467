const express = require("express");
const app = express();
const path = require("path");
const { connectToMongoDb } = require("./connection");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const URL = require("./models/url");

const PORT = 8002;

connectToMongoDb("mongodb://127.0.0.1:27017/short-url").then(() => {
  console.log("mongoDb connected");
});
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get("/test", async (req, res) => {
//   const allUrls = await URL.find({});
//   return res.render("home", {
//     urls: allUrls,
//   });
// });

app.use("/url", urlRoute);
app.use("/", staticRoute);
app.get("/shorturls/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );

  if (!entry) {
    return res.status(404).send("<h1>Short URL not found</h1>");
  }

  res.redirect(entry.redirectURl);
});

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
