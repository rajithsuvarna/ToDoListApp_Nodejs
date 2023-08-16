//setting up express and port
const express = require("express");
const port = 8000;
const app = express();

//setting up mongoose
const db = require("./config/mongoose");

//setting up router
app.use("/", require("./routes"));

//settig up view engine ejs
app.set("view engine", "ejs");
app.set("views", "./views");

//using the middleware to set up assets(css and js files)
app.use(express.static("assets"));

//setting up express server
app.listen(port, function (error) {
  if (error) {
    console.log("ERROR:", error);
    return;
  }
  console.log("Server is UP and Running on PORT:", port);
});
