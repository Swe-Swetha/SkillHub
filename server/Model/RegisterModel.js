const Connect = require("../Config/db");

const CreateNewUser = (id, name, userName, email, password) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO USERS(UserID,Name,Email,UserName,Password) VALUES(?,?,?,?,?)`
        Connect.query(query, [id, name, email, userName, password], (err, result) => {
            if (err)
                reject("Error from Database: ", err)
            resolve(result)
        })
    })
}