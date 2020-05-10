const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);

app.use(bodyParser.json());

let users = [];
let usersEmailsList = [];

const checkUserEmail = (email) => {
  if (usersEmailsList.indexOf(email) !== -1) {
    return false;
  }
  usersEmailsList.push(email);
  return true;
};

const processingReqBody = (object) => {
  delete object.acceptTerms;
  delete object.skill;
  return object;
};

app.post("/sign-up", function (req, res) {
  const isNewEmail = checkUserEmail(req.body.email);
  if (!isNewEmail) {
    console.log("Пользователь с таким email уже зарегистрирован");
    console.log("Список email: ", usersEmailsList);
    res.send({
      status: false,
      msg: "Пользователь с таким email уже зарегистрирован",
    });
    return;
  }
  const user = processingReqBody(req.body);
  users.push(user);
  console.log("Список email: ", usersEmailsList);
  res.send({
    status: true,
    msg: "Новый пользователь зарегистрирован",
  });
});

app.listen(3000, () => {
  console.log(`App running at http://localhost:3000`);
});
