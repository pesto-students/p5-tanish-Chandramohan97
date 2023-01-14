const app = require("express")();
const port = 8080;
const loginRouter = require("./router/loginRouter");
const signUpRouter = require("./router/signUpRouter");
const assets = require("./router/asset");
const assetUpdate = require("./router/assetUpdate");

app.use("/signUp", signUpRouter);
app.use("/login", loginRouter);
app.use("/assets", assets);
app.use("/assetUpdate", assetUpdate);

app.get("/", (req, res) => {
  res.send("Server working");
});

app.listen(port, () => {
  console.log("listening to port");
});
