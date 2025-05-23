const express = require("express")
const authRoute = express.Router();
const { Register, Login } = require("../Controller/authController")


authRoute.post('/registerUser', Register)
authRoute.get('/loginUser',Login)

module.exports = { authRoute }