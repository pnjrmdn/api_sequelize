const express = require('express');
const {User} = require("../models");
const router = express.Router();

const usersHandler = require('./handlers/users');
const userIdHandler = require("./handlers/users/id");

// router.get("/", usersHandler.get);
// router.post("/", usersHandler.post);

// router.get("/:userId", userIdHandler.get);
// router.put("/:userId", userIdHandler.put);
// router.delete("/:userId", userIdHandler.delete);


router
.route("/")
.get(usersHandler.get)
.post(usersHandler.post);

router
.route("/:userId")
.get(userIdHandler.get)
.put(userIdHandler.put)
.delete(userIdHandler.delete);

module.exports = router;

// router.get("/", async(req, res) => {

//   const users = await User.findAll();
//   return res.json(users);

// });

// router.post("/", async(req, res) => {

//   const body = req.body;
//   if(!body.name || !body.email)
//     return res.status(400).json({message: "name and email null!"});

//   const user = await User.create(body);
//   return res.json(user);
// });
