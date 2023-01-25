const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  obj = {
    a: "My Auth",
    number: 34,
  };
  res.json(obj);
});

module.exports = router;
