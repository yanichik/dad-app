const path = require("path");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 5001;

if (process.env.ENVIRONMENT !== 'production') {
	require('dotenv').config();
}

// const dbURL = process.env.MONGO_ATLAS_URI;
const dbURL = 'mongodb://127.0.0.1/dadApp';

//Set up default mongoose connection
// var dbURL = process.env.MONGO_ATLAS_URI || "mongodb://127.0.0.1/dadApp";
mongoose
	.connect(dbURL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		retryWrites: false,
	})
	.then(() => {
		console.log("Mongoose Connected to MongoDB!");
	})
	.catch((err) => {
		console.log("Mongoose Connection ERROR!");
		console.log(err);
	});

//Get the default connection
var db = mongoose.connection;

app.use(express.static("client/build"));
app.use(express.json()); // for parsing application/json
app.use(cors());

// Routers
const activitiesRouter = require("./routes/activities");

// Routes
app.use("/api/activities", activitiesRouter);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
