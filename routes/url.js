const express = require("express");
const {
  handlegenerateNewShortURL,
  getAnalytics,
} = require("../controllers/url");
const router = express.Router();

router.post("/", handlegenerateNewShortURL);
router.get("/analytics/:shortId", getAnalytics);

module.exports = router;
