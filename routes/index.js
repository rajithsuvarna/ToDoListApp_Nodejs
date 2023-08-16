//setting up express and router using express
const express = require("express");
const router = express.Router();

//importing the controller
const homeController = require("../controllers/home_controller");

// using middleware to  parse the incoming requests with urlencoded payloads
router.use(express.urlencoded());

//get method to fetch data from database and send the the browser
router.get("/", homeController.home);

//post method to create task and send the data from rowser to database
router.post("/createtask", homeController.createtask);

//post methed to get the checked inputs from the browser
router.post("/delete", homeController.checkid);

//get method to delete the task from the database
router.get("/delete-task", homeController.delete);

module.exports = router;
