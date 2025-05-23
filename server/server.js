require('dotenv').config();
const express = require("express")
const cors = require("cors")
const { DbConnect } = require("../server/Config/db")
const { userRoute } = require("./Routes/routes")
const { authRoute } = require("./Routes/authRoute")
const PORT = 3000;


const app = express()
app.use(cors())
app.use(express.json())
app.use(userRoute)
app.use(authRoute)



DbConnect();
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

