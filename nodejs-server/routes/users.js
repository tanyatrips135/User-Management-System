const express = require("express");
const router = express.Router();

const userController = require("../controllers/users");

router.get("/users", userController.getUsers);              // get all users OR pagination (query parameter)
router.get("/users/:userId", userController.getUser);       // get user by id (dynamic parameter)
router.post("/users", userController.postUser);             // add user information, id is randomly-generated
router.delete("/users/:userId", userController.deleteUser); // delete user by id

module.exports = {
    routes: router
};
