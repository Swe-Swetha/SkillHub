const { RegisterUser, ValidateUser } = require("../Service/authService");

const Register = async (req, res) => {
    try {
        const response = await RegisterUser(req.body)
        // console.log(response)
        res.status(200).json({ message: "Registration Successful" })
    } catch (err) {
        res.send(err.message)
        console.log(err)
    }
}

const Login = async (req, res) => {
    try {
        const response = await ValidateUser(req.body)
        res.status(200).json({
            token: response,
            message: "Success"
        })
    } catch (err) {
        res.status(401).json({ "Error ": err.message })
    }
}

module.exports = { Register, Login }