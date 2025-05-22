const express = require("express")
const cors = require("cors")
const ConnectDB = require("../server/Config/db")
const userRoutes = require("../server/Routing/routes")
const PORT = 3000;


const app = express()
app.use(cors())
app.use(userRoutes.userRoute)




ConnectDB();
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

