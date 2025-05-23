const { connection } = require("../Config/db");


const User = (id, name, userName, email, password) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO users (UserID, Name, Email, UserName, Password) VALUES(?,?,?,?,?)`;
        connection.query(query, [id, name, email, userName, password], (err, result) => {
            if (err) reject(err)
            resolve(result)
        })
    })
}

const getUser = (email) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT UserID, Password FROM users WHERE Email=?`, [email], (err, result) => {
            if (err) reject(err)
            resolve(result)
        })
    })
}

module.exports = { User, getUser }