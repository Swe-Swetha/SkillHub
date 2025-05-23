const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const { User, getUser } = require("../Model/authModel");

const JWT_SECRET = process.env.JWT_SECRET_KEY


const RegisterUser = async (registerData) => {

    const { name, email, userName, password } = registerData;

    // Ckecking Email if Already Exists
    let result = await getUser(email)
    if (result.length > 0)
        throw new Error("Email already exists")

    //Generating Unique ID
    const id = userName.slice(0, 4) + crypto.randomBytes(8).toString('hex')

    //Hashing Password
    let hashedPwd = await bcrypt.hash(password, 10)

    //Creating new User
    try {
        const data = await User(id, name, userName, email, hashedPwd)
        return data
    } catch (err) {
        console.log(err)
        throw err;
    }
}


const ValidateUser = async (loginData) => {
    const { email, password } = loginData;

    let result = await getUser(email)
    // console.log(result)
    if (result.length <= 0)
        // return "User Not found"
        throw new Error("User Not found")
    isPwd = await bcrypt.compare(password, result[0].Password)
    // console.log(isPwd)
    if (!isPwd) throw new Error("Invalid Password")

    const payload = {
        id: result[0].UserID,
        email: result[0].Email
    }
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" })
    return token
}


module.exports = { RegisterUser, ValidateUser };