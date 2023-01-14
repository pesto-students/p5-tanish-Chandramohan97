// login router for helping the user to login
// Please change the action to '/login' in the form tag of login.html

const loginRouter = require("express").Router();
const path = require("path");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dataBase = "Login";
const client = new MongoClient(url);
let md5 = require("md5"); //library for password encryption.

// async function getData(email) {
//   let result = await client.connect(); // returns a promise object since it takes a bit of time.Connects to the url.
//   let db = result.db(dataBase); // connection with the specified mongoDB database
//   let collection = db.collection("Users");
//   let response = await collection.find({ emailId: email }).toArray();
//   console.log(response);

// return response;
// }

loginRouter.use(bodyParser.urlencoded({ extended: true }));

loginRouter.get("/", (req, res) => {
  res.sendFile(
    "C:/Users/DELL/OneDrive/Desktop/webServer/createLoginAPI/public/login.html" // Hosting up the website on the server.
  );
});

loginRouter.post("/", (req, res) => {
  const email = req.body.email;
  const pwd = md5(req.body.pwd);

  async function getData(email) {
    let result = await client.connect(); // returns a promise object since it takes a bit of time.Connects to the url.
    let db = result.db(dataBase); // connection with the specified mongoDB database
    let collection = db.collection("Users");
    let response = await collection.find({ emailId: email }).toArray();

    if (pwd == response[0].password) res.send(response);
    else res.send("Incorrect username or password");
  }

  getData(email);
  // const response = getData(email);
  // console.log(response);
  // res.json({ email: email, pwd: pwd });
});

module.exports = loginRouter;
