// Asset api returns the information regarding portfolio

const assets = require("express").Router();
const path = require("path");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dataBase = "Login";
const client = new MongoClient(url);

let md5 = require("md5"); //library for password encryption.

assets.use(bodyParser.urlencoded({ extended: true }));

assets.get("/", (req, res) => {
  res.sendFile(
    "C:/Users/DELL/OneDrive/Desktop/webServer/createLoginAPI/public/login.html" // Hosting up the website on the server.
  );
});

assets.post("/", (req, res) => {
  const email = req.body.email;
  const pwd = md5(req.body.pwd);

  async function getData(email) {
    let result = await client.connect(); // returns a promise object since it takes a bit of time.Connects to the url.
    let db = result.db(dataBase); // connection with the specified mongoDB database
    let collection = db.collection("Users");
    let response = await collection.find({ emailId: email }).toArray();
    // console.log(response);

    if (pwd == response[0].password) {
      const collection = db.collection("Assets"); // connecting to Collections which contains the info
      const getAssets = await collection.find({ emailId: email }).toArray();
      //   console.log(Promise.resolve(Assets));
      //   res.send(Promise.resolve(Assets));
      const obj = {
        Name: getAssets[0].Name, // returns the Name
        "Assets:": getAssets[0].Assets, //return the list of assets
        Equity: getAssets[0].Equity, //returns the amount present in equity
        "Fixed Income": getAssets[0]["Fixed Income"], // returns the fixed income of the logged in user
        // "Savings" : getAssets[0].Savings //  returns the savings
      };
      res.send(obj);
    } else res.send("Incorrect username or password");
  }

  getData(email);
});

module.exports = assets;
