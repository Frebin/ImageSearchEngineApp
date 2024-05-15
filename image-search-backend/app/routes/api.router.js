const express = require("express");

const images = require("./images/images.controller");

const router = express.Router();

router.use("/images", images);

module.exports = router;
