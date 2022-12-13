const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
var cors = require('cors')

dotenv.config()

app.use(cors())

mongoose.set('strictQuery', true); // To resolve the warning of mongo version 7

mongoose.connect(process.env.MONGO_URL,() => {
    console.log("Connected to MongoDB")
});

// Middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)


app.listen(8800,() => {
    console.log("Server running")
})