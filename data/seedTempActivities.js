const mongoose = require("mongoose");
const Activity = require("../models/activity");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

// const dbURL = process.env.MONGO_ATLAS_URI;
// const dbURL = "mongodb://127.0.0.1/dadApp";

//Set up default mongoose connection
// var dbURL = process.env.MONGO_ATLAS_URI;
var dbURL = process.env.MONGO_ATLAS_URI || "mongodb://127.0.0.1/dadApp";
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

// const newActivity = new Activity({
// _id: new mongoose.Types.ObjectId(),
// name: "pond_hockey",
// paid: false,
// price: 0,
// children: 6,
// description: "playing hockey on the pond",
// image:
// 	"https://images.unsplash.com/photo-1515703407324-5f753afd8be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
// });

// newActivity
// 	.save()
// 	.then((a) => {
// 		console.log(a);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

Activity.insertMany([
	{
		_id: new mongoose.Types.ObjectId(),
		name: "pond_hockey",
		paid: false,
		price: 0,
		children: 6,
		description: "playing hockey on the pond",
		image:
			"https://images.unsplash.com/photo-1515703407324-5f753afd8be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		name: "freesbee",
		paid: false,
		price: 0,
		children: 2,
		description: "playing freesbee in the park",
		image:
			"https://images.unsplash.com/photo-1601831974284-7cba02cd2887?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		name: "sea_world",
		paid: true,
		price: 200,
		children: 1,
		description: "visit sea world",
		image:
			"https://images.unsplash.com/photo-1522432601293-65a2fdbd86c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		name: "basketball",
		paid: false,
		price: 0,
		children: 2,
		description: "watch a basketball game",
		image:
			"https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		name: "watch_baseball",
		paid: true,
		price: 120,
		children: 1,
		description: "watch a baseball game",
		image:
			"https://images.unsplash.com/photo-1529768167801-9173d94c2a42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
	},
])
	.then((a) => {
		console.log(a);
	})
	.catch((e) => {
		console.log(e);
	});
