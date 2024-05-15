const express = require("express");

const service = require("./images.service");

const router = express.Router();

router.get("/search", search);

module.exports = router;

function search(req, res, next) {
  service
    .search(req.query)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(next);
}
