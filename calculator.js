const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get('/calculator', function(req, res) {
  res.sendFile(__dirname + "/calculator.html");
});

app.get('/bmicalculator', function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/calculator', function(req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var operation = (req.body.operation);

  if (operation == "addition") {
    var answer = num1 + num2
  }
  if (operation == "subtraction") {
    var answer = num1 - num2
  }
  if (operation == "multiplication") {
    var answer = num1 * num2
  }
  if (operation == "division") {
    var answer = num1 / num2
  }

  res.send(operation + " of two numbers is : " + answer);

});

app.post('/bmicalculator', function(req, res) {

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var answer = weight / (height * height)

  const t1 = "Body mass index / Diagnosis <br>"
  const t2 = "1) 16 or less / Severe underweight <br>"
  const t3 = "2) 16—18,5 / Insufficient (deficiency) body weight<br>"
  const t4 = "3) 25—30 / Overweight (pre-obesity)<br>"
  const t5 = "4) 30—35 / Obesity<br>"
  const t6 = "5) 35—40 / Obesity is sharp <br>"
  const t7 = "6) 40 and more / Very severe obesity <br>"
  const table = t1 + t2 + t3 + t4 + t5 + t6 + t7;
  res.send(table + "  Your BMI : " + answer);
});

app.listen(3000, function() {
  console.log("Server is listening ... ");
});
