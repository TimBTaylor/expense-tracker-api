require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(
  cors({
    origin: "*",
    methods: ["GET, POST, DELETE"],
  })
);

app.use(express.json());

const userRouter = require("./routes/user");

app.use("/expensetracker", userRouter);

var port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server started"));
