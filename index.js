const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
var cors = require("cors");
const multer = require("multer");
const path = require("path");

dotenv.config();

app.use(cors());

mongoose.set("strictQuery", true); // To resolve the warning of mongo version 7

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to MongoDB");
});

// When making '{/images}' this path request redirect to '{public/images}'
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Middleware
app.use(express.json());
// To resolve cors issue of uploading image
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(morgan("common"));

// Used to store the images of shared posts in public folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images"); // Error here solve
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage : storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File Uploaded succesfully");
  } catch (error) {
    console.log(error);
  }
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Server running");
});
