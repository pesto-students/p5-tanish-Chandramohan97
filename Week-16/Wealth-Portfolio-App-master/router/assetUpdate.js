// assetUpdate to help users update or delete the funds.
// change the action attribute of form tag in input to "/assetUpdate"

const assetUpdate = require("express").Router();
const path = require("path");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dataBase = "Login";
const client = new MongoClient(url);
const { transporter, mailOptions } = require("../sendMail"); // importing transporter function from sendMail module

let md5 = require("md5"); //library for password encryption.

assetUpdate.use(bodyParser.urlencoded({ extended: true }));

assetUpdate.get("/", (req, res) => {
  res.sendFile(
    "C:/Users/DELL/OneDrive/Desktop/webServer/createLoginAPI/public/login.html" // Hosting up the website on the server.
  );
});

assetUpdate.post("/", (req, res) => {
  const email = req.body.email;
  const pwd = md5(req.body.pwd);

  async function getData(email) {
    let result = await client.connect(); // returns a promise object since it takes a bit of time.Connects to the url.
    let db = result.db(dataBase); // connection with the specified mongoDB database
    let collection = db.collection("Users");
    let response = await collection.find({ emailId: email }).toArray();

    if (pwd == response[0].password) {
      const collection = db.collection("Assets"); // connecting to Collections which contains the info
      const getAssets = await collection.find({ emailId: email }).toArray();
      const fixed = { "Fixed Income": getAssets[0]["Fixed Income"] }; //Fetching the old fixed income and updating it by 10000;
      //   console.log(fixed);
      const newFixed = {
        $set: { "Fixed Income": fixed["Fixed Income"] + 10000 },
      };
      collection.updateOne(fixed, newFixed, (err, res) => {
        if (err) throw err;
        else {
          // console.log('DOCS updated')
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });
        }
      });
    }
  }
  getData(email);
});

module.exports = assetUpdate;
