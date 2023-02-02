const express = require('express');
const router = express.Router();
const authHandler = require('./handlers/auth');

router.get("/login", authHandler.login);
router.post("/register", authHandler.register);


module.exports = router;

// router.get('/login', (req, res) => {
//     return res.json({ status: "sucess"});
// });