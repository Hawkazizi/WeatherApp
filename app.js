const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send(
    '<div><a href="http://localhost:3000/BMI">BMI</a></div>' +
      "<div><a href='http://localhost:3000/Calc'>BMI2</a></div>" +
      "<div><a href='http://localhost:3000/Weather'>Weather</a></div>"
  );
});

app.get("/BMI", function (req, res) {
  res.sendFile(__dirname + "/html.html");
});
app.get("/Calc", function (req, res) {
  res.sendFile(__dirname + "/html.html");
});

app.get("/Weather", function (req, res) {
  res.sendFile(__dirname + "/weatherapp.html");
});

app.post("/BMI", function (req, res) {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const multiply = num1 * num2;
  res.send(multiply.toString());
});
app.listen(3000, function () {
  console.log("server is working");
});
