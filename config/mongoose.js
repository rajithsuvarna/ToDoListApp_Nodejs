//setting up mongoose
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

//connecting with the mongodb using the url
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Todo_list_app");
}

//displaying the message in the terminal when mongodb connection is done
const db = mongoose.connection;
db.once("open", function () {
  console.log("Successfully connected to the db");
});
