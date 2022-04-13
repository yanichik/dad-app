// const path = require('path');
import path from "path";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const __dirname = path.resolve();

dotenv.config();
// require("dotenv").config();

const app = express();

const port = process.env.PORT || 5001;

// Configure mongoose
// mongoose.set('useCreateIndex', true);

//Set up default mongoose connection
var mongoDB = process.env.MONGODB_URI || "mongodb://127.0.0.1/dad-app";
mongoose.connect(mongoDB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	retryWrites: false,
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.static("client/build"));
app.use(express.json()); // for parsing application/json
app.use(cors());

// Routers
// const usersRouter = require("./routes/users");
// import usersRouter from "./routes/users.js";
// const activitiesRouter = require("./routes/activities");
import activitiesRouter from "./routes/activities.js";

// Routes
// app.use("/users", usersRouter);
app.use("/activities", activitiesRouter);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
