const path = require("path");
const express = require("express");
const layout = require("express-layout");
const bodyParser = require("body-parser");
const cors = require("cors");
// const engines = require('consolidate');

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("jade").renderFile);

app.set("layouts", path.join(__dirname, "views"));

app.use(layout());
app.set("view engine", "html");
app.use(cors());

const middleware = [
  layout(),
  express.static(path.join(__dirname, "public")),
  bodyParser.urlencoded(),
];
app.use(middleware);

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post("/sign-up", urlencodedParser, function (req, res) {
  const data = req.body;
  console.log("Получен запрос!", data);
  // res.render(path.join(__dirname, "success.html"));
  // res.send(`${data.name} - ${data.age} зарегистрирован`);
});

app.listen(3000, () => {
  console.log(`App running at http://localhost:3000`);
});
