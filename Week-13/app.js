const express = require("express");
const https = require("https");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.post("/", (req, res) => {
  const city = req.body.city;
  const apiKey = "89243cbe4845f1116a376e5092c245ad";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  https.get(url, (response) => {
    response.on("data", (data) => {
      var weatherData = JSON.parse(data);
      temp = weatherData.main.temp - 273;
      //   res.send('Weather forecast for ' +c)
      res.send("Temp for today for " + city + " is " + Math.ceil(temp) + "°C");
      //   console.log(weatherData.main.temp - 273);
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
