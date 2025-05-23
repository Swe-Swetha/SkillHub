const mysql = require("mysql2");

const db = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "skillhub",
    port: "3306",
}

const connection = mysql.createConnection(db);

const DbConnect = async () => {
    try {
        await connection.connect((err) => {
            if (err) {
                console.log("Database Connection Error : " + err.message)
            }
            else
                console.log("Database Connected")
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = { DbConnect, connection };