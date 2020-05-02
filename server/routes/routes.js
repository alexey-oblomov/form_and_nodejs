const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  console.log("Получен запрос!");
  res.send("Ответ от сервера");
});
module.exports = router;
