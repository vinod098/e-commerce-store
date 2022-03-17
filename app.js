require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// my routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");

//DB connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB IS CONNECTED");
  });

//Middle ware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//Routes

app.use("/api", authRoutes);
app.use("/api" , userRoutes);
app.use("/api" , categoryRoutes);

//PORT

const port = process.env.PORT || 8000;

//Starting a server

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
