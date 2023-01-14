const signUpRouter = require("express").Router();
const path = require("path");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dataBase = "Login";
const client = new MongoClient(url);
let md5 = require("md5"); // library for encrypting the password

signUpRouter.use(bodyParser.urlencoded({ extended: true }));

signUpRouter.get("/", (req, res) => {
  res.sendFile(
    "C:/Users/DELL/OneDrive/Desktop/webServer/createLoginAPI/public/signUp.html"
  );
});

signUpRouter.post("/", (req, res) => {
  const fname = req.body.name;
  const mobNo = req.body.mobNo;
  const email = req.body.email;
  const pwd = md5(req.body.pwd); //storing the encrypted the password.

  async function getData() {
    let result = await client.connect(); // returns a promise object since it takes a bit of time.Connects to the url.
    let db = result.db(dataBase); // connection with the specified mongoDB database
    let collection = db.collection("Users");

    if (
      (await collection.find({ password: pwd }).count()) > 0 ||
      (await collection.find({ emailId: email }).count()) > 0 ||
      (await collection.find({ mobno: mobNo }).count()) > 0 // checking for duplicacy of data
    ) {
      res.send("User exists");
    } else {
      let userData = {
        emailId: email,
        password: pwd,
        name: fname,
        mobno: mobNo,
      };
      collection.insertOne(userData, (err, res) => {
        if (err) throw err;
        console.log("Document inserted");
      });
      res.send(userData);
    }
  }

  getData();
});

module.exports = signUpRouter;
