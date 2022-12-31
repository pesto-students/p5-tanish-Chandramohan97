const express = require("express");
const https = require("https");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const { Console, info } = require("console");
const port = 3000;

// app.use(express.json());
// app.use("/weather", userController);

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.post("/", (req, res) => {
  const city = req.body.city;
  const days = req.body.days;
  const apiKey = "89243cbe4845f1116a376e5092c245ad";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`; // API for one day.
  const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=${days}&appid=${apiKey}`;

  if (days == 1) {
    https.get(url, (response) => {
      response.on("data", (data) => {
        var weatherData = JSON.parse(data);
        temp = weatherData.main.temp - 273;
        //   res.send('Weather forecast for ' +c)
        res.send(
          "Temp for today for " + city + " is " + Math.ceil(temp) + "°C"
        );
        //   console.log(weatherData.main.temp - 273);
      });
    });
  } else {
    https.get(url2, (response) => {
      response.on("data", (data) => {
        var weatherData = JSON.parse(data);
        // temp = weatherData.main.temp - 273;
        //   res.send('Weather forecast for ' +c)
        const list = weatherData.list;
        const infoList = [];
        for (const ele of list) {
          // console.log(city +"'s Weather " )
          const info =
            "Weather for " +
            city +
            " for " +
            ele.dt_txt +
            " is " +
            Math.ceil(ele.main.temp - 273.15) +
            "°C";
          infoList.push(info);
          // console.log(infoList);
        }
        res.send(infoList);
      });
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
