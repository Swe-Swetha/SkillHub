const { RegisterUser, ValidateUser } = require("../Service/authService");

const Register = async (req, res) => {
    try {
        const response = await RegisterUser(req.body)
        // console.log(response)
        res.status(200).send("Registred Successfully")
    } catch (err) {
        res.send(err.message)
        console.log(err)
    }
}

const Login = async (req, res) => {
    try {
        const response = await ValidateUser(req.body)
        res.json({
            "token": response,
            "message": "Success"
        })
    } catch (err) {
        res.status(401).json({ "Error ": err.message })
    }
}

module.exports = { Register, Login }