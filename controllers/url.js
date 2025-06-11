const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function handlegenerateNewShortURL(req, res) {
  const body = req.body;

  if (!body.url) {
    return res.status(400).json({ error: "url is required" });
  }

  const shortId = nanoid(8);

  await URL.create({
    shortId: shortId,
    redirectURl: body.url,
    visitHistory: [],
  });
  return res.render("home", { id: shortId });
}

async function getAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalclicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = { handlegenerateNewShortURL, getAnalytics };
